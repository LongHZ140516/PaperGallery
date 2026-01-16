import { defineCollection, z } from 'astro:content';

// Schema for paper/image collections (header and pipeline)
const imagesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        authors: z.array(z.string()),
        year: z.string(),
        conference: z.string(),
        license: z.string().optional().default(''), // License field for copyright info
        tags: z.array(z.string()),
        image: z.string(), // filename only
        paper: z.string().url().optional().or(z.literal('')),
        code: z.string().url().optional().or(z.literal('')),
        project: z.string().url().optional().or(z.literal('')),
        bibtex: z.string().optional().default(''), // Made optional to skip files with YAML parsing errors
    }),
});

// Schema for project page examples collection (supports both examples and templates)
const projectPageCollection = defineCollection({
    type: 'content',
    schema: z.union([
        // Example Schema (Strict)
        z.object({
            title: z.string(),
            year: z.string(),
            conference: z.string(),
            tags: z.array(z.string()),
            image: z.string(),
            link: z.string().url().optional().or(z.literal('')),
        }),
        // Template Schema (Loose, for templates/web)
        z.object({
            name: z.string(),
            tags: z.array(z.string()).default([]),
            image: z.string(),
            link: z.string().url().optional().or(z.literal('')),
            // Optional fields to prevent errors if mixed content provided
            title: z.string().optional(),
            year: z.string().optional(),
            conference: z.string().optional(),
        })
    ])
});

// Schema for tools collections (color and icon)
const toolsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string().default(''),
        image: z.string().default(''),
        link: z.string().url().optional().or(z.literal('')),
    }),
});

export const collections = {
    'images': imagesCollection,
    'project_page': projectPageCollection,
    'tools': toolsCollection,
};

