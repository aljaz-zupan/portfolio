<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { scaleFly } from '$lib/animations/scaleFly';

	import { fly, fade } from 'svelte/transition';
	let node: HTMLElement;
</script>

<IntersectionObserver element={node} let:intersecting>
	<footer
		bind:this={node}
		class="footer footer-center p-10 bg-base-200 text-base-content rounded"
		class:intersecting
	>
		<div class="grid grid-flow-col gap-4">
			<a href="/about" class="link link-hover">About me</a>
			<a href="/contact" class="link link-hover">Contact</a>
		</div>
		{#if intersecting}
			<div transition:scaleFly>
				<div class="grid grid-flow-col gap-4">
					<a href="https://github.com/aljaz-zupan">
						<svg
							stroke-width="1.5"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							stroke="currentColor"
							class="h-5 w-5"
							><path
								d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/><path
								d="M14.333 19v-1.863c.025-.31-.018-.62-.126-.913a2.18 2.18 0 00-.5-.781c2.093-.227 4.293-1 4.293-4.544 0-.906-.358-1.778-1-2.434a3.211 3.211 0 00-.06-2.448s-.787-.227-2.607.961a9.152 9.152 0 00-4.666 0c-1.82-1.188-2.607-.96-2.607-.96A3.211 3.211 0 007 8.464a3.482 3.482 0 00-1 2.453c0 3.519 2.2 4.291 4.293 4.544a2.18 2.18 0 00-.496.773 2.134 2.134 0 00-.13.902V19M9.667 17.702c-2 .631-3.667 0-4.667-1.948"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/></svg
						>
					</a>
				</div>
			</div>
		{/if}
		<div>
			<p>© Aljaž Zupan</p>
		</div>
	</footer>
</IntersectionObserver>
