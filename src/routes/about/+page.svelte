<script lang="ts">
	import Article from '$lib/articles/Article.svelte';
	import { scaleFly } from '$lib/animations/scaleFly.js';

	import IntersectionObserver from 'svelte-intersection-observer';

	let node: HTMLElement;
</script>

<svelte:head>
	<title>About me</title>
	<meta name="description" content="About me" />
</svelte:head>

<Article>
	<h1>About me</h1>

	<p>
		I love new tehnologies. I addore experementing with new software and incorporating it in my
		workflow. So in retrospect I try to learn as much as I can.
	</p>

	<pre class="w-min">npm create svelte@latest</pre>

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
<Article>
	<div class="h-screen flex justify-content text-center items-center">
		<div bind:this={node} class="overflow-hidden">
			<IntersectionObserver element={node} let:intersecting threshold="0.2">
				{#if intersecting}
					<div transition:scaleFly class:intersecting>
						<h2>Naslov</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptas consequatur,
							recusandae ab architecto laboriosam odio voluptate, sapiente dolor temporibus sunt.
						</p>
					</div>
				{/if}
			</IntersectionObserver>
		</div>
	</div>
</Article>

<style>
</style>
