<!-- src/routes/[slug].svelte -->
<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<article>
	<h1 class="mb-0">{data.props.post.title}</h1>
	<time class="mt-0">{data.props.post.date}</time>
	<div>{@html data.props.post.content}</div>
</article>
