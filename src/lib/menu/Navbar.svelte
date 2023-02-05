<script lang="ts">
	import Logo from './Logo.svelte';
	import Navigation from './Navigation.svelte';

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
</script>

<nav class="bg-base-200 w-full px-4 py-4">
	<ul class="grid grid-flow-col space-between md:max-w-3xl md:mx-auto">
		<Logo />
		<Navigation {navigationItems} />
	</ul>
</nav>
