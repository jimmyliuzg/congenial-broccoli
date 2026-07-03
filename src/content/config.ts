import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.enum(['personal', 'experimental', 'technical']).optional().default('personal'),
    demoUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    screenshot: z.string().optional(),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    theme: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { projects, writing, journal };
