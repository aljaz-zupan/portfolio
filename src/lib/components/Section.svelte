<script lang="ts">
	import { modeCurrent } from '@skeletonlabs/skeleton';
	import type { GradientPosition, Gradient, Position } from '$lib/types';
	export let gradients: Gradient[] = [];
	export let wrap: Boolean = false;
	let className = '';
	export { className as class };

	const convertPosition = (position: Position): GradientPosition => {
		switch (position) {
			case 't':
				return '0% 0%';
			case 'l':
				return '0% 50%';
			case 'r':
				return '100% 50%';
			case 'b':
				return '0% 100%';
			case 'tl':
				return '0% 0%';
			case 'tr':
				return '100% 0%';
			case 'bl':
				return '0% 100%';
			case 'br':
				return '100% 100%';
			default:
				return '0% 0%';
		}
	};

	const gradientStyles = gradients.map((gradient: Gradient, index) => {
		const position: GradientPosition = convertPosition(gradient.position);

		return `radial-gradient(at ${position}, rgba(var(--color-${gradient.color}-500) / 0.33) 0px, transparent 50%)`;
	});
</script>

<section
	style="background-image: {gradientStyles};"
	class={className}
	class:prose-invert={!$modeCurrent}
>
	<div class="section-container max-w-7xl mx-auto" class:wrap class:prose-invert={!$modeCurrent}>
		<slot />
	</div>
</section>

<style lang="postcss">
	section .wrap {
		@apply w-full py-16 px-4 prose;
	}
	@media (min-width: 768px) {
		section .wrap {
			@apply py-32;
		}
	}
</style>
