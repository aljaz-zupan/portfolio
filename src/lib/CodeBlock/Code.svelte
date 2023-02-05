<script lang="ts">
	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';

	const code = 'const add = (a: number, b: number) => a + b;';
</script>

<pre><code><slot /></code></pre>
