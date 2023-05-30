<script lang="ts">
	export let gradients: Gradient[] = [];
	export let wrap: Boolean = true;
	let className = '';
	export { className as class };

	const convertPosition = (position: Position) => {
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

	const gradientStyles = gradients.map((gradient, index) => {
		const position = convertPosition(gradient.position);

		return `radial-gradient(at ${position}, rgba(var(--color-${gradient.color}-500) / 0.33) 0px, transparent 50%)`;
	});
</script>

<section style="background-image: {gradientStyles};" class={className}>
	<div class="section-container" class:wrap>
		<slot />
	</div>
</section>

<style>
	section .wrap {
		margin-left: auto;
		margin-right: auto;
		width: 100%;
		max-width: 80rem;
		padding: 4rem 1rem;
	}
	@media (min-width: 768px) {
		section .wrap {
			padding-top: 6rem;
			padding-bottom: 6rem;
			margin-left: auto;
			margin-right: auto;
			width: 100%;
			max-width: 80rem;
			padding: 4rem 1rem;
		}
	}
</style>
