import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['tests/unit/**/*.{test,spec}.{js,ts}']
	},
	ssr: {
		noExternal: ['three', 'troika-three-text']
	}
};

export default config;
