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
    // Self-identification: lets feed consumers verify the feed's own
    // location (Atom RFC 4287 practice, adopted by RSS best practices)
    customData: `<atom:link href="${new URL('/blog/rss.xml', site).href}" rel="self" type="application/rss+xml" />`,
    items: posts.map((post) => ({
      title: post.data.title,
      link: `/blog/${postSlug(post.id)}/`,
      pubDate: post.data.pubDate,
      description: post.data.description ?? makeExcerpt(post.body ?? ''),
    })),
  });
};