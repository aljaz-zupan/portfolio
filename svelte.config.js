import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import seqPreprocessor from 'svelte-sequential-preprocessor';
import { preprocessThrelte } from '@threlte/preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: seqPreprocessor([
		vitePreprocess(),
		preprocessThrelte(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: 'src/routes/blog/[slug]/+page.svelte'
			}
		})
	]),

	kit: {
		adapter: adapter()
	}
};

export default config;
