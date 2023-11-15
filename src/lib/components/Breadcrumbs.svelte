<script lang="ts">
	export let articleName: string;
</script>

<ol class="breadcrumb flex gap-4 max-w-prose mx-auto px-4 m-4">
	<li class="crumb"><a class="anchor" href="/">Home</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li class="crumb"><a class="anchor" href="/blog">Blog</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li>{articleName}</li>
</ol>
