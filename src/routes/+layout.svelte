<script lang="ts">
	import '../app.css';
	import Menu from '$lib/menu/Menu.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import Article from '$lib/articles/Article.svelte';
	import { scaleFly } from '$lib/animations/scaleFly';

	import IntersectionObserver from 'svelte-intersection-observer';

	import { fly, fade, slide } from 'svelte/transition';
	import { elasticInOut } from 'svelte/easing';
	let node: HTMLElement, node2: HTMLElement;
</script>

<main>
	<slot />
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
	<Footer />
</main>
<Menu />

<style>
	:global(html, body, body > div, body > div > main) {
		height: 100%;
	}
</style>
