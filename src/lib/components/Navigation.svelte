<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	export let direction: navigationDirection = 'row';

	function drawerClose(): void {
		drawerStore.close();
	}
	console.log(direction);
</script>

<nav
	class="list-nav flex"
	class:flex-row={direction === 'row'}
	class:flex-col={direction === 'col'}
>
	<a href="/" on:click={drawerClose}>Home</a>
	<a href="/projects" on:click={drawerClose}>Projects</a>
	<a href="/blog" on:click={drawerClose}>Blog</a>
	<a href="/contact" on:click={drawerClose}>Contact</a>
</nav>

<style>
	nav ul li {
		margin-top: 0;
	}
</style>
