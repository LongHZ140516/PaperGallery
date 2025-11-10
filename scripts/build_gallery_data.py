import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
README_PATH = ROOT / "README.md"
OUTPUT_PATH = ROOT / "web" / "data" / "gallery-data.json"
SECTION_START = "Tools"


def extract_links(text: str):
    return [
        {"label": label.strip(), "url": url.strip()}
        for label, url in re.findall(r"\[([^\]]+)]\(([^)]+)\)", text)
    ]


def flush_entry(section, entry, body_buffer):
    if entry is None:
        return
    description = "\n".join(body_buffer).strip()
    if description:
        entry["description"] = description
    section["entries"].append(entry)


def flush_section_intro(section, intro_buffer):
    intro = "\n".join(intro_buffer).strip()
    if intro:
        section["intro"] = intro


def build_gallery_data(markdown: str):
    lines = markdown.splitlines()
    sections = []

    collecting = False
    current_section = None
    current_entry = None
    section_intro_buffer = []
    body_buffer = []
    collecting_abstract = False
    abstract_buffer = []

    def push_entry():
        nonlocal current_entry, body_buffer, collecting_abstract, abstract_buffer
        if current_section and current_entry:
            if collecting_abstract:
                current_entry["abstract"] = "\n".join(abstract_buffer).strip()
                collecting_abstract = False
                abstract_buffer = []
            flush_entry(current_section, current_entry, body_buffer)
            body_buffer = []
            current_entry = None
        else:
            body_buffer = []

    def push_section():
        nonlocal current_section, section_intro_buffer
        if not current_section:
            return
        if not current_section["entries"]:
            flush_section_intro(current_section, section_intro_buffer)
        sections.append(current_section)
        current_section = None
        section_intro_buffer = []

    for line in lines:
        raw = line.rstrip()
        stripped = raw.strip()

        if not collecting:
            match = re.match(r"^##\s+(.+)", stripped)
            if match and re.sub(r"[^\w]", "", match.group(1)).startswith(SECTION_START):
                collecting = True
                current_section = {"title": match.group(1).strip(), "entries": []}
            continue

        match = re.match(r"^##\s+(.+)", stripped)
        if match:
            push_entry()
            push_section()
            current_section = {"title": match.group(1).strip(), "entries": []}
            continue

        if current_section is None:
            continue

        entry_match = re.match(r"^###\s+(.*)", stripped)
        if entry_match:
            push_entry()
            if not current_section["entries"] and section_intro_buffer:
                flush_section_intro(current_section, section_intro_buffer)
                section_intro_buffer = []
            current_entry = {
                "title": entry_match.group(1).strip(),
                "authors": "",
                "abstract": "",
                "links": [],
                "images": [],
            }
            continue

        if current_entry is None:
            if stripped.startswith("<details") or (
                stripped.startswith("<summary") and "Abstract" not in stripped
            ):
                continue
            if stripped.startswith("</details>"):
                continue
            if stripped:
                section_intro_buffer.append(raw)
            continue

        if stripped.startswith("<details") and "Abstract" not in stripped:
            continue

        if "<summary><b>Abstract" in stripped:
            collecting_abstract = True
            abstract_buffer = []
            continue

        if collecting_abstract:
            if "</details>" in stripped:
                collecting_abstract = False
                current_entry["abstract"] = "\n".join(abstract_buffer).strip()
                abstract_buffer = []
            else:
                abstract_buffer.append(raw)
            continue

        if stripped.startswith("**Authors:**"):
            current_entry["authors"] = stripped.replace("**Authors:**", "").strip()
            continue

        if stripped.startswith("!["):
            image_match = re.match(r"!\[([^\]]*)]\(([^)]+)\)", stripped)
            if image_match:
                current_entry["images"].append(
                    {"alt": image_match.group(1).strip(), "src": image_match.group(2).strip()}
                )
            continue

        if "[" in stripped and "](" in stripped and not stripped.startswith("<"):
            links = extract_links(stripped)
            if links:
                current_entry["links"].extend(links)
                continue

        if stripped:
            body_buffer.append(raw)

    push_entry()
    push_section()

    sanitized = []
    for section in sections:
        title = section.get("title", "")
        if title.lower().startswith("tools"):
            continue
        sanitized.append(
            {
                "title": title,
                "intro": section.get("intro", ""),
                "entries": [
                    {
                        "section": title,
                        "title": entry.get("title", ""),
                        "authors": entry.get("authors", ""),
                        "abstract": entry.get("abstract", ""),
                        "description": entry.get("description", ""),
                        "links": entry.get("links", []),
                        "images": entry.get("images", []),
                    }
                    for entry in section.get("entries", [])
                ],
            }
        )
    return sanitized


def main():
    markdown = README_PATH.read_text(encoding="utf-8")
    sections = build_gallery_data(markdown)
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(sections, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Gallery data written to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
