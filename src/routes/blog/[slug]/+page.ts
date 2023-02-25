import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.slug === 'first') {
		return {
			title: 'Hello first post!',
			date: '25. 2. 2023',
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
		};
	}

	throw error(404, 'Not found');
}
