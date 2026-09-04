// src/pages/blog/rss.xml.ts — the feed (press, readers, and the Discord bot)
import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPublishedPosts, postSlug, makeExcerpt } from '../../utils/blog';
import { SITE } from '../../config/site';
import { ui } from '../../config/strings';

export const GET: APIRoute = async (context) => {
  const site = context.site ?? new URL(SITE.url);
  const posts = await getPublishedPosts();
  return rss({
    title: `${SITE.title} — ${ui.en.blog.title}`,
    description: ui.en.blog.subtitle,
    site,
    // 1 — DECLARE the vocabulary: this puts xmlns:atom="…" on the <rss> root,
    //     which is what makes any <atom:…> element legal inside the document.
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
    // 2 — USE the vocabulary: the self-link (injected into <channel>)
    customData: `<atom:link href="${new URL('/blog/rss.xml', site).href}" rel="self" type="application/rss+xml" />`,
    items: posts.map((post) => ({
      title: post.data.title,
      link: `/blog/${postSlug(post.id)}/`,
      pubDate: post.data.pubDate,
      description: post.data.description ?? makeExcerpt(post.body ?? ''),
    })),
  });
};