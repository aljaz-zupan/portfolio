<script lang="ts">
	let navigationItems = [
		{
			title: 'Home',
			url: '/'
		},
		{
			title: 'Projects',
			url: '/projects'
		},
		{
			title: 'Contact',
			url: '/contact'
		},
		{
			title: 'Blog',
			url: '/blog'
		}
	];

	export let clickable = false;

	const getMenuState = () => {
		if (!clickable) return;
		let menuToggle: HTMLInputElement = document.querySelector('#my-drawer-3')!;
		menuToggle.checked = !menuToggle.checked;
	};
</script>

{#each navigationItems as { title, url }}
	<li><a href={url} on:click={getMenuState}>{title}</a></li>
{/each}
