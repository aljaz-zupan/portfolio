<script lang="ts">
	import '../app.css';
	import Menu from '$lib/components/Menu.svelte';
</script>

<div class="flex flex-col items-center flex-grow text-center h-screen">
	<div class="h-full flex flex-col flex-grow w-screen overflow-auto items-center text-center">
		<div class="container">
			<slot />
		</div>
	</div>
	<Menu />
</div>
