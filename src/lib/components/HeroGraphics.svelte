<script lang="ts">
	import { LightSwitch, Avatar, ProgressRadial, ProgressBar } from '@skeletonlabs/skeleton';
	import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let condition = false;
</script>

<div class="hero relative w-[100ch]">
	<div class="hero-container relative w-full">
		<div>
			<span class="chip variant-filled animate-spin-bounce m-4">Chip</span>
			<span class="chip variant-filled-primary m-4">Chip</span>
		</div>
		<LightSwitch class="mx-auto my-7" bgDark="bg-surface-600 left-12">Noč</LightSwitch>
		<svg
			class="fill-token h-14 mx-auto my-7"
			viewBox="0 0 85 29"
			xmlns="http://www.w3.org/2000/svg"
		>
			{#if condition}
				<path
					transition:draw={{ duration: 1500, easing: quintOut }}
					d="M4.68 27.8H19.4L10.92 4.48L2 29H0.72L10.92 0.959999L21.12 29H4.68V27.8ZM22.7959 29H21.5959V0.999998H22.7959V29Z"
					stroke="#D41642"
					fill="none"
					stroke-width="0.7px"
				/>
				<path
					transition:draw={{ duration: 1500, easing: quintOut }}
					d="M47.6944 29H31.3744L45.6144 2.2H32.4144V0.999998H47.6144L33.3744 27.8H47.6944V29ZM63.0731 14.36H51.1931L63.4331 2.2H49.9131V27.8H65.4331V29H48.7131V0.999998H66.3531L54.1131 13.16H63.0731V14.36ZM70.28 27.8H82.68L68.36 3.04V29H67.16V0.999998H68.56L83.52 26.88V0.999998H84.72V29H70.28V27.8Z"
					fill="none"
					stroke-width="0.7px"
				/>
			{/if}
		</svg>

		<button
			type="button"
			class="btn variant-filled"
			on:click={() => {
				condition = !condition;
			}}>{condition ? 'Pobriši' : 'Nariši'}</button
		>
		<Avatar
			src="https://source.unsplash.com/SyYmXSDnJ54/128x128"
			width="w-32"
			rounded="rounded-full"
			class="animate-bounce mx-auto my-7"
		/>

		<ProgressRadial
			stroke={100}
			meter="stroke-primary-500"
			class="mx-auto my-7"
			track="stroke-primary-500/30"
		/>

		<ProgressBar class="w-[70%]" />

		<section class="card w-[calc(100%-2rem)] animate-wiggle mx-auto my-7">
			<div class="p-4 space-y-4">
				<div class="placeholder" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
		</section>
	</div>
	<div class="stars absolute top-0 left-0 -z-[100] h-full w-screen md:w-96 mx-auto">
		<svg
			class="fill-token h-full w-full absolute"
			viewBox="0 0 217 210"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle class="star animate-float-up-10" cx="16.5" cy="60.5" r="1" />
			<circle class="star animate-float-down-13" cx="96.5" cy="52.5" r="0.5" />
			<circle class="star animate-float-up-17" cx="41.5" cy="10.5" r="0.5" />
			<circle class="star animate-float-down-14" cx="52.5" cy="91.5" r="0.5" />
			<circle class="star animate-float-up-18" cx="93.5" cy="91.5" r="0.7" />
			<circle class="star animate-float-down-10" cx="134.5" cy="73.5" r="0.5" />
			<circle class="star animate-float-down-16" cx="92.5" cy="1.5" r="0.5" />
			<circle class="star animate-float-up-12" cx="46.5" cy="46.5" r="0.5" />
			<circle class="star animate-float-down-12" cx="142.5" cy="42.5" r="0.5" />
			<circle class="star animate-float-up-11" cx="57.5" cy="70.5" r="0.5" />
			<circle class="star animate-float-down-11" cx="85.5" cy="21.5" r="0.5" />
			<circle class="star animate-float-up-13" cx="103.5" cy="15.5" r="1" />
			<circle class="star animate-float-up-16" cx="88.5" cy="63.5" r="0.5" />
			<circle class="star animate-float-down-14" cx="172.5" cy="55.5" r="0.5" />
			<circle class="star animate-float-up-14" cx="123.5" cy="11.5" r="1" />
			<circle class="star animate-float-down-15" cx="128.5" cy="94.5" r="0.5" />
			<circle class="star animate-float-up-15" cx="169.5" cy="94.5" r="0.5" />
			<circle class="star animate-float-down-17" cx="210.5" cy="76.5" r="0.5" />
			<circle class="star animate-float-down-18" cx="168.5" cy="3.5" r="0.5" />
			<circle class="star animate-float-down-11" cx="122.5" cy="49.5" r="0.5" />
			<circle class="star animate-float-up-14" cx="216.5" cy="43.5" r="0.6" />
			<circle class="star animate-float-up-17" cx="137.5" cy="79.5" r="0.5" />
			<circle class="star animate-float-down-15" cx="150.5" cy="32.5" r="0.5" />
			<circle class="star animate-float-up-11" cx="187.5" cy="26.5" r="0.5" />
			<circle class="star animate-float-down-16" cx="1.5" cy="165.5" r="0.8" />
			<circle class="star animate-float-up-17" cx="80.5" cy="157.5" r="0.5" />
			<circle class="star animate-float-down-12" cx="25.5" cy="115.5" r="0.5" />
			<circle class="star animate-float-up-18" cx="36.5" cy="196.5" r="0.5" />
			<circle class="star animate-float-dowm-13" cx="77.5" cy="196.5" r="0.5" />
			<circle class="star animate-float-up-10" cx="122.5" cy="176.5" r="0.5" />
			<circle class="star animate-float-up-17" cx="76.5" cy="105.5" r="0.9" />
			<circle class="star animate-float-down-17" cx="30.5" cy="151.5" r="0.5" />
			<circle class="star animate-float-up-15" cx="126.5" cy="147.5" r="0.5" />
			<circle class="star animate-float-up-11" cx="41.5" cy="175.5" r="0.5" />
			<circle class="star animate-float-down-10" cx="69.5" cy="126.5" r="0.8" />
			<circle class="star animate-float-up-12" cx="87.5" cy="120.5" r="0.5" />
			<circle class="star animate-float-up-13" cx="72.5" cy="168.5" r="0.5" />
			<circle class="star animate-float-down-13" cx="156.5" cy="160.5" r="0.5" />
			<circle class="star animate-float-down-18" cx="107.5" cy="116.5" r="0.5" />
			<circle class="star animate-float-up-16" cx="112.5" cy="209.5" r="0.5" />
			<circle class="star animate-float-down-12" cx="153.5" cy="199.5" r="1" />
			<circle class="star animate-float-up-13" cx="194.5" cy="181.5" r="0.5" />
			<circle class="star animate-float-up-12" cx="152.5" cy="108.5" r="0.5" />
			<circle class="star animate-float-up-16" cx="106.5" cy="154.5" r="0.5" />
			<circle class="star animate-float-up-14" cx="200.5" cy="148.5" r="0.5" />
			<circle class="star animate-float-down-11" cx="117.5" cy="178.5" r="0.3" />
			<circle class="star animate-float-down-15" cx="134.5" cy="137.5" r="0.5" />
			<circle class="star animate-float-up-10" cx="171.5" cy="131.5" r="1.5" />
		</svg>
	</div>
</div>

<style lang="postcss">
	.placeholder {
		@apply animate-pulse;
	}
	.animate-spin-bounce {
		animation: spin-bounce 4s linear infinite;
	}
	.animate-wiggle {
		animation: wiggle 2s alternate infinite;
	}

	.fill-token {
		stroke: rgba(var(--theme-font-color-base));
	}
	:global(.dark) .fill-token {
		stroke: rgba(var(--theme-font-color-dark));
	}

	.star {
		opacity: 0.3;
	}

	.animate-float-up-10 {
		animation: float-up 10s ease-in-out infinite;
		animation-delay: 2s;
	}
	.animate-float-up-11 {
		animation: float-up 11s ease-in-out infinite;
		animation-delay: 3s;
	}
	.animate-float-up-12 {
		animation: float-up 12s ease-in-out infinite;
		animation-delay: 1s;
	}
	.animate-float-up-13 {
		animation: float-up 13s ease-in-out infinite;
		animation-delay: 6s;
	}
	.animate-float-up-14 {
		animation: float-up 14s ease-in-out infinite;
		animation-delay: 4s;
	}
	.animate-float-up-15 {
		animation: float-up 15s ease-in-out infinite;
		animation-delay: 3s;
	}
	.animate-float-up-16 {
		animation: float-up 16s ease-in-out infinite;
		animation-delay: 1s;
	}
	.animate-float-up-17 {
		animation: float-up 17s ease-in-out infinite;
		animation-delay: 2s;
	}
	.animate-float-up-18 {
		animation: float-up 18s ease-in-out infinite;
		animation-delay: 2s;
	}

	.animate-float-down-10 {
		animation: float-down 10s ease-in-out infinite;
		animation-delay: 4s;
	}
	.animate-float-down-11 {
		animation: float-down 11s ease-in-out infinite;
		animation-delay: 3s;
	}
	.animate-float-down-12 {
		animation: float-down 12s ease-in-out infinite;
		animation-delay: 5s;
	}
	.animate-float-down-13 {
		animation: float-down 13s ease-in-out infinite;
		animation-delay: 6s;
	}
	.animate-float-down-14 {
		animation: float-down 14s ease-in-out infinite;
		animation-delay: 1s;
	}
	.animate-float-down-15 {
		animation: float-down 15s ease-in-out infinite;
		animation-delay: 3s;
	}
	.animate-float-down-16 {
		animation: float-down 16s ease-in-out infinite;
		animation-delay: 2s;
	}
	.animate-float-down-17 {
		animation: float-down 17s ease-in-out infinite;
		animation-delay: 6s;
	}
	.animate-float-down-18 {
		animation: float-down 18s ease-in-out infinite;
		animation-delay: 1s;
	}

	@keyframes spin-bounce {
		0% {
			transform: translateY(50%) rotate(0deg);
		}
		50% {
			transform: translateY(0%) rotate(180deg);
		}
		100% {
			transform: translateY(50%) rotate(360deg);
		}
	}

	@keyframes wiggle {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(5deg);
		}
		50% {
			transform: rotate(0deg);
		}
		75% {
			transform: rotate(-5deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	@keyframes float-up {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes float-down {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
		to {
			transform: translateY(0);
		}
	}
</style>
