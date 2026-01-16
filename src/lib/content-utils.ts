// Helper utilities for content collections

/**
 * Constructs the image path for a paper/image item
 * @param category - The category (header, pipeline, examples, templates, color, icon)
 * @param subcategory - The subcategory path (e.g., 'images/header' or 'project_page/examples')
 * @param filename - The image filename
 * @returns The full path to the image
 */
export function getImagePath(category: string, subcategory: string, filename: string): string {
    return `/src/content/${subcategory}/images/${filename}`;
}

/**
 * Generates a unique ID from a file path
 * @param filePath - The file path (e.g., 'header/paper/Bian_DynamicCity_2025.md')
 * @returns A unique ID (e.g., 'header-bian-dynamiccity-2025')
 */
export function generateId(filePath: string): string {
    return filePath
        .replace(/\.(md|mdx)$/, '')
        .replace(/\/paper\//, '-')
        .replace(/\/web\//, '-')
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, '-')
        .replace(/-+/g, '-');
}

/**
 * Extracts the category from a content collection ID
 * @param id - The content collection ID (e.g., 'header/paper/Bian_DynamicCity_2025.md')
 * @returns The category (e.g., 'header', 'pipeline', 'examples', etc.)
 */
export function extractCategory(id: string): string {
    const parts = id.split('/');
    return parts[0];
}

/**
 * Formats authors array into a string
 * @param authors - Array of author names
 * @returns Comma-separated author names
 */
export function formatAuthors(authors: string[]): string {
    return authors.join(', ');
}
