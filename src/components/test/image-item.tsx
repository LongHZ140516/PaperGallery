// Type definition for Image/Paper items from content collections
export interface ImageItem {
  id: string;
  slug: string;
  category: 'header' | 'pipeline';
  image: string;
  tags: string[];
  title: string;
  authors: string; // Will be formatted string from array
  abstract: string;
  year: string;
  conference: string;
  license?: string; // License information for copyright status
  bibtex: string;
  paperLink?: string;
  githubLink?: string;
  projectpageLink?: string;
}