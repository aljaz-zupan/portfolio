<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';

	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';

	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		Toast,
		Drawer,
		drawerStore,
		LightSwitch,
		modeCurrent
	} from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';

	const drawerSettings: DrawerSettings = {
		id: 'example-3',
		// Provide your property overrides:
		bgBackdrop: 'bg-gradient-to-tr from-primary-600/25 via-black-900/50 to-secondary-600/25',
		width: 'w-[280px] md:w-[480px]',
		padding: 'p-2',
		rounded: 'rounded-xl'
	};

	storeHighlightJs.set(hljs);

	function drawerOpen(): void {
		drawerStore.open(drawerSettings);
	}
</script>

<Toast />
<Drawer position="right">
	<div class="p-4 flex flex-col justify-between">
		<Navigation direction="col" />
		<div class="flex flex-row">
			Theme
			<LightSwitch bgDark="bg-surface-600 left-12" class="mx-2 mb-4">Noč</LightSwitch>
			{$modeCurrent ? 'Light' : 'Dark'}
		</div>
	</div>
</Drawer>

<!-- App Shell -->
<AppShell slotSidebarRight="w-0 md:w-52">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/" class="logo-text">
					<strong class="text-xl uppercase"><span class="text-primary-500">AI</span>ZEN</strong>
				</a>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<div class="hidden md:block">
					<Navigation />
				</div>

				<button
					on:click={() => drawerOpen()}
					class="block md:hidden w-10 h-10 list-nav text-primary-500"
				>
					<svg
						class="fill-token h-8"
						stroke-width="1"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M3 5h18M3 12h18M3 19h18"
							stroke-width="1"
							stroke-linecap="round"
							stroke-linejoin="round"
						/></svg
					>
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarRight" />
	<!-- Page Route Content -->
	<div class="page">
		<main>
			<slot />
		</main>
	</div>
</AppShell>

<style>
	.logo-text {
		text-decoration: dashed;
	}
	.fill-token {
		stroke: rgba(var(--theme-font-color-base));
		color: rgba(var(--theme-font-color-base));
		fill: rgba(var(--theme-font-color-base));
	}
	:global(.dark) .fill-token {
		stroke: rgba(var(--theme-font-color-dark));
		color: rgba(var(--theme-font-color-base));
		fill: rgba(var(--theme-font-color-base));
	}
	:global(.prose .codeblock-pre) {
		margin: 0;
	}
</style>
