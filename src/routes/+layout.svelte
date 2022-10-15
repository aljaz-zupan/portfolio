<script lang="ts">
	import '../app.css';
	import Menu from '$lib/menu/Menu.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<main>
	<div class="wrapper min-h-screen">
		<div class="content h-max">
			<slot />
		</div>
		<Footer />
	</div>
</main>
<Menu />

<style>
	:global(body, html) {
		height: 100%;
		overflow: hidden;
	}
	main {
		overflow: auto;
	}
</style>
