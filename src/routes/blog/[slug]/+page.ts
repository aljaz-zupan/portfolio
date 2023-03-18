// src/routes/[slug].ts
import { error } from '@sveltejs/kit';
import { posts } from '../posts';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const post = posts.find((post) => post.slug === params.slug);
	console.log('post:', post);
	if (post) {
		return {
			props: {
				post
			}
		};
	}

	throw error(404, 'Not found');
}
