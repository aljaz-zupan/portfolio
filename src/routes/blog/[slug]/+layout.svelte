<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { page } from '$app/stores';

	interface Breadcrumb {
		title: string;
		url: string[];
	}

	console.log($page);

	const articleName = $page.data.meta.title;
	let urlPath = $page.url.pathname;

	if (urlPath[0] == '/') {
		urlPath = urlPath.substring(1);
	}

	const urls = urlPath.split('/');

	const breadcrumb: Breadcrumb = {
		title: articleName,
		url: urls
	};
</script>

<Breadcrumbs {articleName} />
<slot />
