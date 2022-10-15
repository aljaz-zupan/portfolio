<script lang="ts">
	import '../app.css';
	import Menu from '$lib/menu/Menu.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<main class="">
	<div class="h-full overflow-y-scroll">
		<div class="content overflow-auto">
			<slot />
		</div>
		<Footer />
	</div>
	<Menu />
</main>

<style>
	:global(html, body, body > div, body > div > main) {
		height: 100%;
	}
</style>
