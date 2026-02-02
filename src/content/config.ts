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

export const collections = { projects, writing };
