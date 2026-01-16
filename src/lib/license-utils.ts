/**
 * License utility functions for determining copyright status
 */

// Open license keywords - content with these licenses is safe to display
const OPEN_LICENSE_PATTERNS = ['CC', 'MIT', 'PUBLIC DOMAIN', 'CC0', 'APACHE', 'BSD', 'CC BY', 'CC BY-NC', 'CC BY-NC-ND', 'CC BY-NC-SA', 'CC BY-SA'];

/**
 * Determines if a license is considered "open" (safe for display)
 * @param license - The license string from frontmatter
 * @returns true if the license is open/permissive
 */
export function isOpenLicense(license: string | null | undefined): boolean {
    if (!license || license.trim() === '') return false;
    const normalized = license.toUpperCase().trim();
    return OPEN_LICENSE_PATTERNS.some(pattern => normalized.includes(pattern));
}

/**
 * Gets display information for a license
 * @param license - The license string from frontmatter
 * @returns Object with isOpen status and display text
 */
export function getLicenseDisplayInfo(license: string | null | undefined): {
    isOpen: boolean;
    displayText: string;
} {
    const isOpen = isOpenLicense(license);
    const displayText = license?.trim() || 'Copyright / Unknown';
    return { isOpen, displayText };
}
