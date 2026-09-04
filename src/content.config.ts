import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional(),   // optional excerpt override
    cover: z.string().optional(),         // '/images/blog/…' path from public/
    coverAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),    // true = dev-only, excluded from prod
    translationKey: z.string().optional() // reserved for future ES translations
  }),
});

export const collections = { blog };