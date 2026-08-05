import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const insights = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./src/content/insights" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		readTime: z.string(),
		category: z.string(),
		featured: z.boolean().default(false),
	}),
});

export const collections = { insights };
