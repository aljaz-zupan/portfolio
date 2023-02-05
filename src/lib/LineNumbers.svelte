<script>
	import { Highlight } from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';

	export let code = `class Point {
  x = 0;
  y = 0;
}
 
const pt = new Point();`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<Highlight {code} language={typescript} langtag />
