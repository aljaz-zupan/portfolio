<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';
	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav">
	<ul class="flex flex-row">
		<li><a href="/" on:click={drawerClose}>Home</a></li>
		<li><a href="/projects" on:click={drawerClose}>Projects</a></li>
		<li><a href="/blog" on:click={drawerClose}>Blog</a></li>
		<li><a href="/contact" on:click={drawerClose}>Contact</a></li>
	</ul>
</nav>

<style>
	nav ul li {
		margin-top: 0;
	}
</style>
