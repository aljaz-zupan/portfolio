<script lang="ts">
	import { posts } from './posts';
</script>

<h1>Blog</h1>

<ul>
	{#each posts as post}
		<li><a href="/blog/{post.slug}">{post.title}</a></li>
	{/each}
</ul>
