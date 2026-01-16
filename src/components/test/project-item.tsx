// Type definition for Project Page items from content collections
export interface ProjectItem {
  id: string;
  slug: string;
  category: 'examples' | 'templates';
  title: string;
  year: string;
  conference: string;
  image: string;
  link: string;
  tags: string[];
}
