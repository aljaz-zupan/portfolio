<script lang="ts">
	import Article from '$lib/articles/Article.svelte';
</script>

<svelte:head>
	<title>About me</title>
	<meta name="description" content="About me" />
</svelte:head>

<Article>
	<h1>About me</h1>

	<p>I like new tehnologies.</p>

	<pre>npm create svelte@latest</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/todos">TODOs</a> page illustrates SvelteKit's data loading and form handling. Try using
		it with JavaScript disabled!
	</p>
</Article>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
