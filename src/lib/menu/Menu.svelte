<script lang="ts">
	let menu = [
		{
			name: 'Home',
			url: '/'
		},
		{
			name: 'Projects',
			url: '/projects'
		}
	];
</script>

<nav>
	<ul>
		{#each menu as { name, url }, i}
			<li><a href={url}>{name}</a></li>
		{/each}
	</ul>
</nav>
