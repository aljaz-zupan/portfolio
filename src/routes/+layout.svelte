<script lang="ts">
	import '../app.css';
	import Header from '$lib/header/Header.svelte';
</script>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<Header />
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

<style>
</style>
