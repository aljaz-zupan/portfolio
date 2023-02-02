<script lang="ts">
	export let navigationItems;
</script>

<ul class="grid grid-flow-col auto-cols-max gap-4">
	{#each navigationItems as { title, url }}
		<li><a href={url}>{title}</a></li>
	{/each}
</ul>
