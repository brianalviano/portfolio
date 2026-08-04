import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
	const posts = await getCollection('insights');
	return rss({
		title: 'Brian Alviano — Engineering Insights',
		description: 'Practical guides and engineering notes on Laravel architecture, REST APIs, and software engineering.',
		site: context.site || 'https://brianalviano.com',
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/insights/${post.id}/`,
		})),
		customData: `<language>en-us</language>`,
	});
}
