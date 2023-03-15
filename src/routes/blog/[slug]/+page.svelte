<!-- src/routes/[slug].svelte -->
<script lang="ts">
	export let post;
</script>

<article>
	<h1>{post.title}</h1>
	<time>{post.date}</time>
	<div>{@html post.content}</div>
</article>
