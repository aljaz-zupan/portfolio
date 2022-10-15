<script lang="ts">
	import '../app.css';
	import Menu from '$lib/menu/Menu.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<main>
	<div class="h-full overflow-y-scroll">
		<div class="content max-h-full overflow-auto">
			<slot />
		</div>
		<Footer />
	</div>
	<Menu />
</main>

<style>
	:global(body, html) {
		height: 100%;
	}
</style>
