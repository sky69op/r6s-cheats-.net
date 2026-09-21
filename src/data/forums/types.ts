import type { ForumPost } from '../../i18n/types';

export type ForumBlock =
  | { type: 'h2' | 'h3' | 'p'; text: string }
  | { type: 'ul' | 'ol'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'cta'; title: string; text: string; href: string };

export interface ForumPostFull extends ForumPost {
  featured?: boolean;
  author?: string;
  body: ForumBlock[];
}
