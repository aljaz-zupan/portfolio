<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/menu/Navbar.svelte';
	import Navigation from '$lib/menu/Navigation.svelte';
</script>

<!-- <Navbar /> -->

<div class="drawer drawer-end">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="w-full navbar bg-base-300">
			<div class="flex-1 px-2 mx-2">Navbar Title</div>
			<div class="flex-none hidden lg:block">
				<ul class="menu menu-horizontal">
					<!-- Navbar menu content here -->
					<Navigation />
				</ul>
			</div>
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</label>
			</div>
		</div>
		<!-- Page content here -->
		<div class="prose md:w-full md:mx-auto md:max-w-3xl px-4 md:px-0 py-4 text-left">
			<slot />
		</div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay w-full" />
		<ul class="menu p-4 w-[80%] max-w-[20rem] bg-base-100">
			<!-- Sidebar content here -->
			<Navigation clickable={true} />
		</ul>
	</div>
</div>
