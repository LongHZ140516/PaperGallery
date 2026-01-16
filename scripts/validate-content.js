import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../src/content');
const issues = [];

function validateMarkdownFile(filePath, relativePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');

        // Extract frontmatter
        const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        if (!frontmatterMatch) {
            issues.push({
                file: relativePath,
                type: 'NO_FRONTMATTER',
                message: 'No frontmatter found',
            });
            return;
        }

        // Try to parse YAML
        try {
            const data = yaml.load(frontmatterMatch[1]);

            // Validate required fields based on collection
            if (relativePath.includes('/images/')) {
                validateImageFields(data, relativePath);
            } else if (relativePath.includes('/project_page/')) {
                validateProjectFields(data, relativePath);
            } else if (relativePath.includes('/tools/')) {
                validateToolFields(data, relativePath);
            }
        } catch (yamlError) {
            issues.push({
                file: relativePath,
                type: 'YAML_PARSE_ERROR',
                message: yamlError.message,
                suggestion: 'Use YAML block scalar (|) for bibtex field if it contains special characters',
            });
        }
    } catch (error) {
        issues.push({
            file: relativePath,
            type: 'FILE_READ_ERROR',
            message: error.message,
        });
    }
}

function validateImageFields(data, file) {
    const required = ['title', 'authors', 'year', 'conference', 'tags', 'image', 'bibtex'];

    for (const field of required) {
        if (!data[field]) {
            issues.push({
                file,
                type: 'MISSING_REQUIRED_FIELD',
                field,
                message: `Missing required field: ${field}`,
            });
        }
    }

    // Check URL fields
    ['paper', 'code', 'project'].forEach(field => {
        if (data[field] && data[field] !== '' && !isValidUrl(data[field])) {
            issues.push({
                file,
                type: 'INVALID_URL',
                field,
                value: data[field],
                message: `Invalid URL in ${field}: ${data[field]}`,
            });
        }
    });
}

function validateProjectFields(data, file) {
    const required = ['title', 'year', 'conference', 'tags', 'image', 'link'];

    for (const field of required) {
        if (!data[field]) {
            issues.push({
                file,
                type: 'MISSING_REQUIRED_FIELD',
                field,
                message: `Missing required field: ${field}`,
            });
        }
    }

    if (data.link && data.link !== '' && !isValidUrl(data.link)) {
        issues.push({
            file,
            type: 'INVALID_URL',
            field: 'link',
            value: data.link,
            message: `Invalid URL: ${data.link}`,
        });
    }
}

function validateToolFields(data, file) {
    const required = ['name', 'image'];

    for (const field of required) {
        if (!data[field]) {
            issues.push({
                file,
                type: 'MISSING_REQUIRED_FIELD',
                field,
                message: `Missing required field: ${field}`,
            });
        }
    }

    if (data.link && data.link !== '' && !isValidUrl(data.link)) {
        issues.push({
            file,
            type: 'INVALID_URL',
            field: 'link',
            value: data.link,
            message: `Invalid URL: ${data.link}`,
        });
    }
}

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

function scanDirectory(dir, baseDir = dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            scanDirectory(fullPath, baseDir);
        } else if (entry.name.endsWith('.md')) {
            const relativePath = path.relative(baseDir, fullPath);
            validateMarkdownFile(fullPath, relativePath);
        }
    }
}

// Run validation
console.log('🔍 Validating markdown files...\n');
scanDirectory(contentDir);

// Output results
if (issues.length === 0) {
    console.log('✅ All files are valid!\n');
} else {
    console.log(`❌ Found ${issues.length} issue(s):\n`);

    // Group by type
    const byType = {};
    issues.forEach(issue => {
        if (!byType[issue.type]) {
            byType[issue.type] = [];
        }
        byType[issue.type].push(issue);
    });

    // Output by type
    Object.entries(byType).forEach(([type, issuesList]) => {
        console.log(`\n📋 ${type} (${issuesList.length} files):`);
        console.log('─'.repeat(60));

        issuesList.forEach(issue => {
            console.log(`\n  File: ${issue.file}`);
            console.log(`  Message: ${issue.message}`);
            if (issue.field) console.log(`  Field: ${issue.field}`);
            if (issue.value) console.log(`  Value: ${issue.value}`);
            if (issue.suggestion) console.log(`  💡 Suggestion: ${issue.suggestion}`);
        });
    });

    // Write to file
    const reportPath = path.join(__dirname, '../validation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(issues, null, 2));
    console.log(`\n\n📄 Detailed report saved to: ${reportPath}\n`);
}
