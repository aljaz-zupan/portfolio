<script lang="ts">
	import type { PageData } from './Types';
	export let data: PageData;
</script>

<article>
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<div>{@html data.content}</div>
</article>
