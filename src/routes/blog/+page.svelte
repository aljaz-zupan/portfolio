<script lang="ts">
	import { Highlight } from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';

	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';

	const code = `class Point {
  x = 0;
  y = 0;
}
 
const pt = new Point();`;

	const code2 = `class Point {
  x = 0;
  y = 0;
}
 
const pt = new Point();`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<h1>Blog</h1>
<h2>Sveltekit, Tailwind and Typescript</h2>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolorem molestias doloribus
	minus sequi voluptates, necessitatibus cum quos id deserunt assumenda, quisquam rem optio dolores
	officia tenetur beatae ipsam nihil?
</p>
<ul>
	<li>Lorem, ipsum dolor.</li>
	<li>Eveniet, eius. Esse.</li>
	<li>Facere, quis dolor.</li>
	<li>Et, possimus eum.</li>
</ul>

<Highlight language={typescript} {code} langtag />

<Highlight language={typescript} code={code2} langtag />

<style>
	:global(code.hljs) {
		background-color: inherit;
	}
</style>
