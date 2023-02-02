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

<nav class="bg-red-200 w-full">
	<ul class="grid grid-flow-col justify-content max-w-2xl">
		<Logo />
		<Navigation {navigationItems} />
	</ul>
</nav>
