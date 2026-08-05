import { getCollection } from "astro:content";

export async function getInsightStaticPaths(lang: "en" | "id") {
	const posts = await getCollection("insights");
	const prefix = `${lang}/`;
	const filtered = posts.filter((post) => post.id.startsWith(prefix));

	const sortedPosts = [...filtered].sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);

	return sortedPosts.map((post, i) => {
		const slug = post.id.replace(new RegExp(`^${prefix}`), "");
		return {
			params: { slug },
			props: {
				post,
				slug,
				prevPost: sortedPosts[i + 1]
					? {
							...sortedPosts[i + 1],
							slug: sortedPosts[i + 1].id.replace(new RegExp(`^${prefix}`), ""),
						}
					: null,
				nextPost: sortedPosts[i - 1]
					? {
							...sortedPosts[i - 1],
							slug: sortedPosts[i - 1].id.replace(new RegExp(`^${prefix}`), ""),
						}
					: null,
			},
		};
	});
}
