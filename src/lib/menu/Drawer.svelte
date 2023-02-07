<script lang="ts">
	import Navigation from './Navigation.svelte';
</script>

<div class="drawer-side">
	<label for="my-drawer-3" class="drawer-overlay w-full" />
	<ul class="menu p-4 w-[80%] max-w-[20rem] bg-base-100">
		<!-- Sidebar content here -->
		<Navigation clickable={true} />
	</ul>
</div>
