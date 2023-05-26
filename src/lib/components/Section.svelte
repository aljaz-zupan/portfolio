<script lang="ts">

	export let gradients: Gradient[];

	function returnStyle(): String {

		let styleString = ""
		
		for (gradient of gradients) {

			styleString += `background-image: radial-gradient(
				at 100% 0%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%);`
		}

		return
	}

	function returnPosition(position: Position): String {
		switch position {
			case 't':
				return "50% 0%"
			case 'b':
				return "50% 100%"
			case 'l':
				return "0% 50%"
			case 'r':
				return "100% 50%"
			case 'tl':
				return "0% 0%"
			case 'tr':
				return "100% 0%"
			case 'bl':
				return "0% 100%"
			case 'br':
				return "100% 100%"
			default:
				throw Error("No valid position")
		}
	}
</script>

<section>
	<slot />
</section>

<style>
	.gradient-1 {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 100% 0%, rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%);
	}

	.gradient-2 {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%);
	}

	.gradient-3 {
		background-image: radial-gradient(
				at 100% 0%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%);
	}

	.gradient-4 {
		background-image: radial-gradient(
				at 0% 100%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%);
	}

	.gradient-5 {
		background-image: radial-gradient(
				at 100% 100%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 0% 0%, rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%);
	}

	.gradient-6 {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 0% 100%, rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%);
	}
	.gradient-7 {
		background-image: radial-gradient(
				at 100% 0%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 0% 0%, rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%);
	}

	.gradient-8 {
		background-image: radial-gradient(
				at 0% 100%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 0% 0%, rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%);
	}

	.gradient-9 {
		background-image: radial-gradient(
				at 100% 0%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 0% 100%, rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%);
	}

	.gradient-10 {
		background-image: radial-gradient(
				at 0% 100%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 100% 0%, rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%);
	}
</style>
