import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';
import nodePath from 'node:path';

async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const href = nodePath.parse(path).name;

		if (file && typeof file === 'object' && 'metadata' in file && href) {
			const metadata = file.metadata as Omit<Post, 'href'>;
			const post = {
				...metadata,
				href: nodePath.resolve('/blog', href)
			} satisfies Post;
			post.published && posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
