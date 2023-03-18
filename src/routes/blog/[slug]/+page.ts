// src/routes/[slug].ts
import { error } from '@sveltejs/kit';
import { posts } from '../posts';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const post = posts.find((post) => post.slug === params.slug);
	if (post) {
		return {
			props: {
				post
			}
		};
	}

	throw error(404, 'Not found');
}
