<script lang="ts">
	import inView from '$lib/inView/inView';
</script>

<div
	class="hero min-h-screen bg-[right_-10rem_bottom] sm:bg-right-bottom"
	style="background-image: url(/hero-image.webp);"
>
	<div class="hero-overlay bg-opacity-70" />
	<div class="prose md:w-full md:mx-auto md:max-w-3xl px-4 md:px-0 py-4 text-center">
		<h1>Aljaž Zupan</h1>
		<h4>Where caffine addiction begins</h4>
		<p>
			Linux enthusiast, and his trusted steed with the name "Open-Horse", continue to explore the
			intersection of caffeine-fueled development, cutting-edge technologies, and attempts at
			comedy. Together, they traverse the vast digital terrain of programming, overcoming obstacles
			and blazing new trails.
		</p>
		<!-- <p>
			See where caffine, development, new technologies and attemps at comedy merge in one person.
			The adventures of a developer, his trusted steed with the name Lapdog
		</p> -->
	</div>
</div>
<div
	class="prose md:w-full md:mx-auto md:max-w-3xl px-4 md:px-0 py-4 text-left"
	use:inView={{ bottom: 300 }}
	on:enter={() => console.log('enter')}
	on:exit={() => console.log('exit')}
>
	<h2 class="mt-8">Welcome to my portfolio</h2>
	<p>
		Hello there! I'm a code wizard, caffeine addict, and occasional comedian. My keyboard and I have
		been conjuring up websites, applications, and software like magic. I may not be able to summon a
		unicorn, but I can make a website load faster than one. So sit back, relax, and enjoy the show
		as I present to you my skills, experience, and probably a few jokes.
	</p>
</div>
