<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/menu/Navbar.svelte';
</script>

<Navbar />

<div class="prose md:mx-auto md:max-w-3xl px-4 md:px-0 py-4">
	<slot />
</div>

<style>
</style>
