import { json } from '@sveltejs/kit';
import { navigating } from '$app/stores';
import nodePath from 'node:path';

console.log(navigating);

async function getMetadata() {
	let posts = [];

	const paths = import.meta.glob('/src/routes/**/**/+page.svelte', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const href = nodePath.parse(path).name;

		/* console.log('file', file, 'href', href); */

		if (file && typeof file === 'object' && 'metadata' in file && href) {
			const metadata = file.metadata;
			const post = {
				...metadata
			};
			post.published && posts.push(post);
		}
	}

	console.log(posts);
}

export async function GET() {
	const posts = await getMetadata();
	return json(posts);
}
