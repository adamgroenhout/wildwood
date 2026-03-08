import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const settings = defineCollection({
  loader: glob({ pattern: 'settings.json', base: 'src/content' }),
  schema: z.object({
    site_name: z.string().optional(),
    site_title: z.string().optional(),
    site_description: z.string().optional(),
    tagline: z.string().optional(),
    logo: z.string().optional(),
    header_cta_text: z.string().optional(),
    header_cta_href: z.string().optional(),
    navigation: z.array(z.object({
      name: z.string(),
      href: z.string(),
      subItems: z.array(z.object({
        name: z.string(),
        href: z.string()
      })).optional()
    })).optional(),
    footer_columns: z.array(z.object({
      title: z.string(),
      links: z.array(z.object({
        name: z.string(),
        href: z.string()
      }))
    })).optional(),
  }).passthrough()
});

const site_pages = defineCollection({
  loader: glob({ pattern: '*.json', base: 'src/content/pages' }),
  schema: z.object({
    title: z.string(),
    seo_title: z.string().optional(),
    subtitle: z.string().optional(),
    blocks: z.array(z.any()).optional()
  }).passthrough()
});

export const collections = { settings, site_pages };
