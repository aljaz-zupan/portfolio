<script lang="ts">
	import '../app.css';
	import Header from '$lib/header/Header.svelte';

	let winWidth;
</script>

<svelte:window bind:innerWidth={winWidth} />

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- <Header /> -->
		<main>
			<slot />
		</main>
		<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
			<div class="grid grid-flow-col gap-4">
				<a href="/about" class="link link-hover">About us</a>
				<a href="/contact" class="link link-hover">Contact</a>
			</div>
			<div>
				<div class="grid grid-flow-col gap-4">
					<a href="https://github.com/aljaz-zupan"
						><svg
							width="24"
							height="24"
							stroke-width="0.96"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="fill-current"
							><path
								d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
								stroke="#000000"
								stroke-width="0.96"
								stroke-linecap="round"
								stroke-linejoin="round"
							/><path
								d="M14.333 19v-1.863c.025-.31-.018-.62-.126-.913a2.18 2.18 0 00-.5-.781c2.093-.227 4.293-1 4.293-4.544 0-.906-.358-1.778-1-2.434a3.211 3.211 0 00-.06-2.448s-.787-.227-2.607.961a9.152 9.152 0 00-4.666 0c-1.82-1.188-2.607-.96-2.607-.96A3.211 3.211 0 007 8.464a3.482 3.482 0 00-1 2.453c0 3.519 2.2 4.291 4.293 4.544a2.18 2.18 0 00-.496.773 2.134 2.134 0 00-.13.902V19M9.667 17.702c-2 .631-3.667 0-4.667-1.948"
								stroke="#000000"
								stroke-width="0.96"
								stroke-linecap="round"
								stroke-linejoin="round"
							/></svg
						></a
					>
				</div>
			</div>

			<div>
				<p>© 2022 Aljaž Zupan</p>
			</div>
		</footer>
	</div>

	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
			<!-- Sidebar content here -->
			<li class="menu-title">
				<span>MAIN</span>
			</li>
			<li class="bordered"><a href="/about">O meni</a></li>
			<li><a href="/contact">Kontakt</a></li>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/projects">Projekti</a></li>
		</ul>
	</div>
</div>
<div class="menu absolute bottom-4 right-4 lg:top-8 lg:left-8">
	<div
		class="m-6 dropdown"
		class:dropdown-top={winWidth < 1024}
		class:dropdown-end={winWidth < 1024}
	>
		<label tabindex="0" class="btn btn-ghost bg-primary hover:bg-primary-focus btn-circle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h7"
				/></svg
			>
		</label>
		<ul
			tabindex="0"
			class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
		>
			<li>
				<a href="/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/></svg
					>
				</a>
			</li>
			<li>
				<a href="/blog">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
				</a>
			</li>
			<li>
				<a href="/about">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
						/></svg
					>
				</a>
			</li>
		</ul>
	</div>
</div>

<style>
</style>
