<script lang="ts">
	const HeroImageUrl = new URL('/img/hero.jpg', import.meta.url);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Portfolio" />
</svelte:head>

<div class="hero min-h-screen" style="background-image: url('{HeroImageUrl}');">
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-thin uppercase">ALJAŽ ZUPAN</h1>
			<div class="flex flex-row font-light capitalize justify-between">
				<span>futurist</span><span>developer</span><span>enthusiast</span>
			</div>
		</div>
	</div>
</div>

<style>
</style>
