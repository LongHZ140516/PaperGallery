// Type definition for Tool items from content collections
export interface ToolItem {
  id: string;
  slug: string;
  category: 'color' | 'icon';
  name: string;
  link: string;
  image: string;
}