const DATA_URL = './data/gallery-data.json';
const IMAGE_BASE = './';

const paperListEl = document.getElementById('paperList');
const statusIndicator = document.getElementById('statusIndicator');
const uploadInput = document.getElementById('uploadInput');
const uploadList = document.getElementById('uploadList');
const uploadForm = document.getElementById('uploadForm');
const titleInput = document.getElementById('uploadTitle');
const authorsInput = document.getElementById('uploadAuthors');
const sectionSelect = document.getElementById('uploadSectionSelect');
const sectionCustomInput = document.getElementById('uploadSectionCustom');
const abstractInput = document.getElementById('uploadAbstract');
const paperLinkInput = document.getElementById('uploadPaperLink');
const projectLinkInput = document.getElementById('uploadProjectLink');
const codeLinkInput = document.getElementById('uploadCodeLink');
const contributionOutput = document.getElementById('contributionOutput');
const snippetField = document.getElementById('snippetField');
const contributionMeta = document.getElementById('contributionMeta');
const downloadMetadataBtn = document.getElementById('downloadMetadata');
const copySnippetBtn = document.getElementById('copySnippet');
const openPrLink = document.getElementById('openPrLink');

const SECTION_CUSTOM_VALUE = '__custom__';
const CONTRIBUTION_IMAGE_DIR = 'images/user-contributions';
const bodyDataset = document.body?.dataset || {};
const REPO_SLUG = bodyDataset.repo || detectRepoSlug() || 'awesome-framework-gallery/awesome-framework-gallery';
const objectUrls = new Set();
let repositoryPapers = [];
let pendingImages = [];
let latestContribution = null;

init();

async function init() {
  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) {
      throw new Error(`数据加载失败（${response.status}）`);
    }
    const rawSections = await response.json();
    repositoryPapers = flattenSections(rawSections);
    populateSectionSelect(rawSections);
    renderAll();
  } catch (error) {
    console.error(error);
    statusIndicator.textContent = error.message;
    statusIndicator.classList.add('error');
  }

  uploadInput.addEventListener('change', handleUploads);
  uploadForm.addEventListener('submit', handleUploadSubmit);
  sectionSelect.addEventListener('change', handleSectionChange);
  downloadMetadataBtn.addEventListener('click', downloadMetadataFile);
  copySnippetBtn.addEventListener('click', copySnippetToClipboard);
  window.addEventListener('beforeunload', revokeUploads);
  handleSectionChange();
}

function flattenSections(sections) {
  const papers = [];
  sections.forEach((section) => {
    section.entries.forEach((entry) => {
      if (!entry.images || !entry.images.length) {
        return;
      }
      papers.push({
        ...entry,
        section: entry.section || section.title || 'Unknown'
      });
    });
  });
  return papers;
}

function renderPapers(papers) {
  paperListEl.innerHTML = '';
  const template = document.getElementById('paper-row-template');

  papers.forEach((paper) => {
    const node = template.content.cloneNode(true);
    const figure = node.querySelector('.paper-row__figure');
    const mainImage = figure.querySelector('img');
    const [primary, ...rest] = paper.images || [];

    if (primary) {
      mainImage.src = `${IMAGE_BASE}${primary.src}`;
      mainImage.alt = primary.alt || paper.title;
    } else {
      figure.remove();
    }

    node.querySelector('.paper-row__section').textContent = paper.section || '—';
    node.querySelector('h3').textContent = paper.title;
    node.querySelector('.paper-row__authors').textContent = paper.authors || '—';

    const linksContainer = node.querySelector('.paper-row__links');
    if (paper.links && paper.links.length) {
      paper.links.forEach((link) => {
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.label;
        anchor.target = '_blank';
        anchor.rel = 'noreferrer noopener';
        linksContainer.appendChild(anchor);
      });
    } else {
      linksContainer.remove();
    }

    const gallery = node.querySelector('.paper-row__gallery');
    if (rest.length) {
      rest.forEach((image) => {
        const img = document.createElement('img');
        img.src = `${IMAGE_BASE}${image.src}`;
        img.alt = image.alt || paper.title;
        gallery.appendChild(img);
      });
    } else {
      gallery.remove();
    }

    const abstractContainer = node.querySelector('.paper-row__abstract');
    if (paper.abstract) {
      abstractContainer.appendChild(createAbstractDetails(paper.abstract));
    } else {
      abstractContainer.remove();
    }

    paperListEl.appendChild(node);
  });
}

function renderAll() {
  renderPapers(repositoryPapers);
  statusIndicator.textContent = `共 ${repositoryPapers.length} 篇（最新数据已上线）`;
  statusIndicator.classList.remove('error');
  renderContributionSummary();
}

function populateSectionSelect(rawSections) {
  const existing = new Set();
  rawSections.forEach((section) => {
    if (section.title) {
      existing.add(section.title.trim());
    }
  });

  const fragment = document.createDocumentFragment();
  const addOption = (label, value, attrs = {}) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    Object.entries(attrs).forEach(([key, val]) => option.setAttribute(key, val));
    fragment.appendChild(option);
  };

  addOption('请选择分类', '');
  Array.from(existing)
    .sort((a, b) => a.localeCompare(b, 'zh-CN'))
    .forEach((name) => addOption(name, name));

  if (!existing.has('用户上传')) {
    addOption('用户上传', '用户上传');
  }

  addOption('其他（自定义）', SECTION_CUSTOM_VALUE);

  sectionSelect.innerHTML = '';
  sectionSelect.appendChild(fragment);
  handleSectionChange();
}

function createAbstractDetails(abstractText) {
  const details = document.createElement('details');
  const summary = document.createElement('summary');
  summary.textContent = '展开摘要';
  details.appendChild(summary);
  abstractText.split(/\n{2,}/).forEach((paragraph) => {
    if (paragraph.trim()) {
      const p = document.createElement('p');
      p.textContent = paragraph.trim();
      details.appendChild(p);
    }
  });
  return details;
}

function handleUploads(event) {
  const files = Array.from(event.target.files || []);
  if (!files.length) {
    clearPendingImages();
    return;
  }

  clearPendingImages();
  const template = document.getElementById('upload-preview-template');

  files.forEach((file) => {
    const url = URL.createObjectURL(file);
    objectUrls.add(url);
    pendingImages.push({ file, url });

    const node = template.content.cloneNode(true);
    const img = node.querySelector('img');
    img.src = url;
    img.alt = file.name;
    node.querySelector('.upload-card__name').textContent = file.name;
    node.querySelector('.upload-card__size').textContent = humanFileSize(file.size);

    uploadList.appendChild(node);
  });

  uploadList.hidden = false;
  event.target.value = '';
}

function humanFileSize(size) {
  if (!size) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const index = Math.min(Math.floor(Math.log(size) / Math.log(1024)), units.length - 1);
  const scaled = size / Math.pow(1024, index);
  return `${scaled.toFixed(1)} ${units[index]}`;
}

function revokeUploads() {
  objectUrls.forEach((url) => URL.revokeObjectURL(url));
}

function handleUploadSubmit(event) {
  event.preventDefault();
  const title = titleInput.value.trim();
  if (!title) {
    statusIndicator.textContent = '请填写论文标题。';
    statusIndicator.classList.add('error');
    return;
  }
  if (!pendingImages.length) {
    statusIndicator.textContent = '请至少选择一张架构图。';
    statusIndicator.classList.add('error');
    return;
  }

  const sectionValue = resolveSectionValue();
  if (!sectionValue) {
    statusIndicator.textContent = '请选择或填写分类。';
    statusIndicator.classList.add('error');
    return;
  }

  const entry = {
    section: sectionValue,
    title,
    authors: authorsInput.value.trim(),
    links: buildLinks(),
    abstract: abstractInput.value.trim(),
    images: pendingImages.map(({ url, file }, index) => ({
      src: url,
      alt: `${title} - 图 ${index + 1} (${file.name})`
    }))
  };

  latestContribution = {
    ...entry,
    imageFiles: pendingImages.map(({ file }) => file.name)
  };
  renderContributionSummary();
  statusIndicator.textContent = '贡献素材已生成，请按步骤提交 PR。';
  statusIndicator.classList.remove('error');
  resetUploadForm();
}

function buildLinks() {
  const links = [];
  if (paperLinkInput.value.trim()) {
    links.push({ label: '📄 Paper', url: paperLinkInput.value.trim() });
  }
  if (projectLinkInput.value.trim()) {
    links.push({ label: '🌐 Project', url: projectLinkInput.value.trim() });
  }
  if (codeLinkInput.value.trim()) {
    links.push({ label: '💻 Code', url: codeLinkInput.value.trim() });
  }
  return links;
}

function resetUploadForm() {
  uploadForm.reset();
  sectionSelect.value = '';
  handleSectionChange();
  clearPendingImages();
}

function clearPendingImages(revokeUrls = true) {
  if (pendingImages.length && revokeUrls) {
    pendingImages.forEach(({ url }) => {
      URL.revokeObjectURL(url);
      objectUrls.delete(url);
    });
  }
  pendingImages = [];
  uploadList.innerHTML = '';
  uploadList.hidden = true;
}

function handleSectionChange() {
  const isCustom = sectionSelect.value === SECTION_CUSTOM_VALUE;
  sectionCustomInput.hidden = !isCustom;
  sectionCustomInput.required = isCustom;
  if (!isCustom) {
    sectionCustomInput.value = '';
  }
}

function resolveSectionValue() {
  const selected = sectionSelect.value;
  if (!selected) {
    return '';
  }
  if (selected === SECTION_CUSTOM_VALUE) {
    return sectionCustomInput.value.trim();
  }
  return selected;
}

function renderContributionSummary() {
  if (!latestContribution) {
    contributionOutput.hidden = true;
    disableContributionActions(true);
    return;
  }

  snippetField.value = buildReadmeSnippet(latestContribution);
  contributionMeta.innerHTML = '';
  latestContribution.imageFiles.forEach((name) => {
    const li = document.createElement('li');
    li.textContent = `${CONTRIBUTION_IMAGE_DIR}/${name}`;
    contributionMeta.appendChild(li);
  });
  openPrLink.href = buildPrLink(latestContribution);
  contributionOutput.hidden = false;
  disableContributionActions(false);
}

function disableContributionActions(disabled) {
  downloadMetadataBtn.disabled = disabled;
  copySnippetBtn.disabled = disabled;
  if (disabled) {
    copySnippetBtn.textContent = '复制 README 片段';
  }
  openPrLink.classList.toggle('disabled', disabled);
  if (disabled) {
    openPrLink.removeAttribute('href');
  }
  if (disabled) {
    snippetField.value = '';
    contributionMeta.innerHTML = '';
  }
}

function buildReadmeSnippet(entry) {
  const linksLine = entry.links?.length
    ? entry.links.map((link) => `[${link.label}](${link.url})`).join(' | ')
    : '';
  const imagesBlock = entry.imageFiles
    .map((name, index) => `![${entry.title} - 图 ${index + 1}](${CONTRIBUTION_IMAGE_DIR}/${name})`)
    .join('\n');
  const abstractBlock = entry.abstract
    ? `<details span>\n<summary><b>Abstract</b></summary>\n${entry.abstract}\n</details>`
    : '';

  return [
    `### ${entry.title}`,
    entry.authors ? `**Authors:** ${entry.authors}` : '',
    linksLine,
    abstractBlock,
    imagesBlock
  ]
    .filter(Boolean)
    .join('\n\n');
}

function buildPrLink(entry) {
  const title = encodeURIComponent(`Add ${entry.title} framework`);
  const body = encodeURIComponent(buildPrBody(entry));
  return `https://github.com/${REPO_SLUG}/compare?quick_pull=1&title=${title}&body=${body}`;
}

function buildPrBody(entry) {
  const checklist = entry.imageFiles
    .map((name) => `- [ ] 上传 ${CONTRIBUTION_IMAGE_DIR}/${name}`)
    .join('\n');
  return [
    `## Summary`,
    `- Title: ${entry.title}`,
    `- Section: ${entry.section}`,
    '',
    '## Checklist',
    checklist || '- [ ] 上传架构图文件',
    '- [ ] 将下述 README 片段合并到相应章节',
    '',
    '```markdown',
    buildReadmeSnippet(entry),
    '```'
  ].join('\n');
}

function downloadMetadataFile() {
  if (!latestContribution) return;
  const payload = buildMetadataPayload(latestContribution);
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const fileName = `${slugify(latestContribution.title)}.metadata.json`;
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function buildMetadataPayload(entry) {
  return {
    section: entry.section,
    title: entry.title,
    authors: entry.authors,
    abstract: entry.abstract,
    links: entry.links,
    images: entry.imageFiles.map((name) => `${CONTRIBUTION_IMAGE_DIR}/${name}`)
  };
}

async function copySnippetToClipboard() {
  if (!latestContribution) return;
  try {
    await navigator.clipboard.writeText(buildReadmeSnippet(latestContribution));
    copySnippetBtn.textContent = '已复制';
    setTimeout(() => {
      copySnippetBtn.textContent = '复制 README 片段';
    }, 2000);
  } catch (error) {
    console.error('clipboard', error);
  }
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'contribution';
}

function detectRepoSlug() {
  const host = window.location.host;
  const path = window.location.pathname.split('/').filter(Boolean);
  if (host.endsWith('.github.io') && path.length) {
    const owner = host.replace('.github.io', '');
    const repo = path[0];
    return `${owner}/${repo}`;
  }
  return null;
}
