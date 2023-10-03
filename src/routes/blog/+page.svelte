<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import * as config from '$lib/config';
	import { formatDate } from '$lib/utils.js';
	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>
<Section
	gradients={[
		{ position: 'tl', color: 'primary' },
		{ position: 'br', color: 'secondary' }
	]}
	class="min-h-[calc(100vh-72px)]"
>
	<div class="container grid sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto px-4 mt-4">
		{#each data.posts as post}
			<a href={post.href} class="card backdrop-blur-sm variant-glass-surface card-hover w-full">
				<header>
					<img
						src="https://images.unsplash.com/photo-1577648188599-291bb8b831c3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=120&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NzMyMDQwNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=250"
						class="bg-black/50 w-full aspect-[21/9] rounded-t-md"
						alt="Post"
					/>
				</header>
				<section class="p-4">
					<h3 class="h3">{post.title}</h3>
					<p>{post.description}</p>
				</section>

				<footer class="card-footer p-4">
					<ul class="flex space-x-2">
						{#each post.categories as tag}
							<li class="chip variant-filled">#{tag}</li>
						{/each}
					</ul>
					<span class="text-xs">{formatDate(post.date)}</span>
				</footer>
			</a>
		{/each}
	</div>
</Section>

<style>
</style>
