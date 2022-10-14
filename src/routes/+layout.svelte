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
	<div class="menu fixed bottom-4 right-4">
		<Menu />
	</div>
</main>
