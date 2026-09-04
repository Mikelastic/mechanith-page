import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

export const PAGE_SIZE = 6;

// Strips the YYYY-MM-DD prefix from a content file id:
// '2026-02-15-devlog-1-the-swap' → 'devlog-1-the-swap'
const SLUG_DATE_RE = /^\d{4}-\d{2}-\d{2}-/;

export function postSlug(id: string): string {
  return id.replace(SLUG_DATE_RE, '');
}

// URLs that exist as real routes and can never be claimed by a post
const RESERVED_SLUGS = new Set(['page', 'rss.xml', 'search-index.json']);

// Build-time guarantees: a post may never collide with another slug or a
// reserved route. Violations throw → the build fails → nothing broken ships.
function assertValidSlugs(posts: BlogPost[]): void {
  const seen = new Map<string, string>();
  for (const post of posts) {
    const slug = postSlug(post.id);
    if (RESERVED_SLUGS.has(slug)) {
      throw new Error(`[blog] "${slug}" is a reserved URL — rename ${post.id}.md`);
    }
    if (seen.has(slug)) {
      throw new Error(
        `[blog] duplicate slug "${slug}": ${post.id} collides with ${seen.get(slug)}`
      );
    }
    seen.set(slug, post.id);
  }
}

// The canonical post list, everywhere in the site:
// drafts visible in dev (so you can preview), excluded in production.
// Newest first. Validated.
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => {
    if (import.meta.env.DEV) return true;
    return data.draft !== true;
  });
  assertValidSlugs(posts);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

// Markdown → plain text, for excerpts and the search corpus
export function stripMarkdown(md: string): string {
  return md
    .replace(/^---[\s\S]*?---\s*/, '')          // defensive: strip frontmatter if present
    .replace(/```[\s\S]*?```/g, ' [code] ')      // fenced code blocks
    .replace(/`([^`]+)`/g, '$1')                // inline code
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')      // images
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')    // links → keep text
    .replace(/^#{1,6}\s+/gm, '')                // heading markers
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1') // emphasis
    .replace(/^>\s?/gm, '')                     // blockquote markers
    .replace(/^\s*[-*+]\s+/gm, '')              // list bullets
    .replace(/\s+/g, ' ')                       // collapse all whitespace
    .trim();
}

// ~320 chars, cut on a word boundary — the teaser shown on cards
export function makeExcerpt(md: string, max = 320): string {
  const text = stripMarkdown(md);
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  const trimmed = lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut;
  return trimmed.trimEnd() + '…';
}