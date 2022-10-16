<script lang="ts">
	import '../app.css';
	import Menu from '$lib/menu/Menu.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<main>
	<slot />
	<Footer />
</main>
<Menu />

<style>
	:global(html, body, body > div, body > div > main) {
		height: 100%;
	}
</style>
