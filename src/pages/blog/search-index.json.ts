import type { APIRoute } from 'astro';
import { getPublishedPosts, postSlug, stripMarkdown } from '../../utils/blog';

export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts();

  const index = posts.map((post) => ({
    url: `/blog/${postSlug(post.id)}/`,
    title: post.data.title,
    date: post.data.pubDate.toISOString(),
    // Plain text corpus; capped so the file stays lean even with long posts
    body: stripMarkdown(post.body ?? '').slice(0, 6000),
  }));

  return new Response(JSON.stringify({ posts: index }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};