<script lang="ts">
	export let breadcrumb: Breadcrumb;

	interface Breadcrumb {
		title: string;
		url: string[];
	}
</script>

<ol class="breadcrumb flex gap-4 max-w-prose mx-auto px-4">
	<!-- {#each breadcrumb.ti as link}
		<li class="crumb"><a class="anchor" href="/">Home</a></li>
	{/each} -->
	<li class="crumb"><a class="anchor" href="/">Home</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li class="crumb"><a class="anchor" href="/blog">Blog</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li>Article</li>
</ol>
