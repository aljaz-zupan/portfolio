<script lang="ts">
	import { modeCurrent } from '@skeletonlabs/skeleton';
	import Section from '$lib/components/Section.svelte';
</script>

<Section wrap gradients={[{ position: 'bl', color: 'primary' }]}>
	<div class="prose" class:prose-invert={!$modeCurrent}>
		<h1 class="h1">Projects</h1>
		<p>Some projects to learn new languages, algorithms & technology</p>
		<ul>
			<li>Rust</li>
			<li>Javascript/Typescript</li>
			<li>Webassembly</li>
			<li>Godot</li>
		</ul>
	</div>
</Section>
<Section
	wrap={true}
	gradients={[
		{ position: 'tl', color: 'primary' },
		{ position: 'br', color: 'secondary' }
	]}
	class="h-[600px]"
>
	<div class="prose" class:prose-invert={!$modeCurrent}>
		<h2>Rust</h2>
		<p>
			I'm exploring Rust for its emphasis on memory safety, making it a robust choice for
			lower-level programming tasks such as system development and embedded systems. The ownership
			system, incorporating concepts like borrowing and lifetimes, ensures efficient memory
			management and prevents common pitfalls. Rust's support for concurrency, coupled with its
			ownership system, catches data races early in development, enhancing the reliability of
			concurrent code. Additionally, the language's zero-cost abstractions enable high-level coding
			without compromising performance, making Rust an attractive option for those seeking a balance
			between efficiency and safety
		</p>
		<ul>
			<li><a href="/projects/rust">First</a></li>
		</ul>
	</div>
</Section>
<Section
	wrap={true}
	gradients={[
		{ position: 'tr', color: 'secondary' },
		{ position: 'bl', color: 'tertiary' }
	]}
	class="h-[600px]"
>
	<div class="prose" class:prose-invert={!$modeCurrent}>
		<h2>Javascript & Typescript with Svelte & Sveltekit</h2>
		<p>
			Exploring Svelte and SvelteKit for web development, Svelte's innovative approach shifts the
			development load to the build step, resulting in smaller and faster front-end applications.
			With SvelteKit, a full-stack framework, the seamless integration of routing, server-side
			rendering, and a straightforward file-based structure simplifies complex web development
			tasks. The emphasis on writing less code while achieving more, coupled with a declarative
			syntax, makes Svelte and SvelteKit attractive for efficient and maintainable web development.
			Altogether, they offer a compelling combination for building modern, responsive applications
			with a focus on simplicity and performance.
		</p>
	</div>
</Section>

<Section class="h-[600px]" gradients={[{ position: 'tl', color: 'tertiary' }]} wrap>
	<div class="prose" class:prose-invert={!$modeCurrent}>
		<h2>Godot</h2>
		<p>
			Looking into Godot for game development, it's an open-source game engine known for its
			versatility and user-friendly design. With its own scripting language, GDScript, specifically
			tailored for game development, Godot makes coding games intuitive and efficient. The engine
			supports both 2D and 3D game development, offering a wide range of features such as a visual
			editor, built-in animation tools, and a collaborative environment for team projects. Godot's
			commitment to openness, combined with its extensive documentation and active community,
			positions it as a compelling choice for developers aiming to create games and applications
			across various genres and platforms.
		</p>
	</div>
</Section>
