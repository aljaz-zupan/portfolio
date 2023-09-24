<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import type { navigationDirection } from '$lib/types';

	const drawerStore = getDrawerStore();
	export let direction: navigationDirection = 'row';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav
	class="list-nav flex h-full"
	class:flex-row={direction === 'row'}
	class:flex-col={direction === 'col'}
>
	<a href="/" on:click={drawerClose}>Home</a>
	<a href="/projects" on:click={drawerClose}>Projects</a>
	<a href="/blog" on:click={drawerClose}>Blog</a>
	<a href="/contact" on:click={drawerClose}>Contact</a>
</nav>
