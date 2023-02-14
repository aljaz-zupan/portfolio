<script lang="ts">
	import { page } from '$app/stores';

	import '../app.css';
	import Navbar from '$lib/menu/Navbar.svelte';
	import Drawer from '$lib/menu/Drawer.svelte';
</script>

<div class="drawer drawer-end">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<Navbar />
		<!-- Page content here -->
		{#if $page.route.id === '/'}
			<slot />
		{:else}
			<div class="prose md:w-full md:mx-auto md:max-w-3xl px-4 md:px-0 py-4 text-left">
				<slot />
			</div>
		{/if}
	</div>
	<Drawer />
</div>
