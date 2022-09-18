<script lang="ts">
	export let link: string;
	export let type: string;

	import GitHubOutlineIcon from '@indaco/svelte-iconoir/icons/GitHubOutlineIcon.svelte';
	import GitHubIcon from '@indaco/svelte-iconoir/icons/GitHubIcon.svelte';
	import type { SvelteComponent, SvelteComponentTyped } from 'svelte/internal';

	const components = [
		{ name: 'githuboutline', component: GitHubOutlineIcon },
		{ name: 'github', component: GitHubIcon }
	];

	const findIcon = (componentType: any): SvelteComponent => {
		const item = components.find((item) => {
			return item.name === componentType;
		});
		console.log(item?.component);
		return item?.component;
	};
</script>

<a href={link}>
	<svelte:component this={findIcon(type)} />
</a>

<style>
	a {
		color: black;
	}
</style>
