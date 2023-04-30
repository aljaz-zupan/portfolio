<script lang="ts">
	export let data;
	const { content, title, date } = data;
</script>

<article>
	<h1 class="mb-0">{title}</h1>
	<time class="mt-0">{date}</time>
	<svelte:component this={content} />
</article>
