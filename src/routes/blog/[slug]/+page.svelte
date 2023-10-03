<script lang="ts">
	import { formatDate } from '$lib/utils';
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="prose container mx-auto px-4">
	<article>
		<hgroup>
			<h1 class="mb-2">{data.meta.title}</h1>
			<p class="text-xs">Published at {formatDate(data.meta.date)}</p>
		</hgroup>

		<div class="flex space-x-2">
			{#each data.meta.categories as categorie}
				<span class="chip variant-filled">#{categorie}</span>
			{/each}
		</div>
		<div class="mt-12">
			<svelte:component this={data.content} />
		</div>
	</article>
</div>
