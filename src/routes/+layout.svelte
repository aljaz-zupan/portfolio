<script lang="ts">
	import {
		AppShell,
		AppBar,
		Drawer,
		LightSwitch,
		modeCurrent,
		initializeStores,
		getDrawerStore,
		storePopup,
		storeHighlightJs
	} from '@skeletonlabs/skeleton';
	initializeStores();

	import '../app.postcss';
	import { scrollPosition } from '../store/scroll_store';

	// Navigation
	import Navigation from '$lib/components/Navigation.svelte';
	const drawerStore = getDrawerStore();

	// Scroll handler
	import type { ComponentEvents } from 'svelte';
	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
		// console.log(event.currentTarget.scrollTop);
		scrollPosition.set(event.currentTarget.scrollTop);
	}

	// Highlight JS
	import hljs from 'highlight.js';
	import xml from 'highlight.js/lib/languages/xml';
	import json from 'highlight.js/lib/languages/json';
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import rust from 'highlight.js/lib/languages/rust';

	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('json', json);
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	hljs.registerLanguage('rust', rust);

	import 'highlight.js/styles/github-dark.css';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- Drawer navigation -->
<Drawer position="right">
	<div class="p-4 flex flex-col justify-between h-full">
		<div class="flex flex-row justify-end">
			<button
				on:click={() => drawerStore.close()}
				class="block md:hidden w-10 h-10 list-nav text-primary-500 flex-none"
			>
				<svg
					stroke-width="1"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					class="fill-token h-8"
					><path
						d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
					/></svg
				>
			</button>
		</div>
		<Navigation direction="col" />
		<div class="flex flex-row justify-end">
			Switch theme
			<LightSwitch bgDark="bg-surface-600 left-12" class="mx-2 mb-4" />
			{$modeCurrent ? 'Light' : 'Dark'}
		</div>
	</div>
</Drawer>

<!-- App Shell -->
<AppShell on:scroll={scrollHandler}>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/" class="logo-text">
					<strong class="text-xl uppercase"><span class="text-primary-500">AI</span>ZEN</strong>
				</a>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<div class="hidden md:flex md:flex-row justify-center">
					<LightSwitch bgDark="bg-surface-600" class="self-center mr-8" />
					<Navigation />
				</div>

				<button
					on:click={() => drawerStore.open()}
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
	<!-- Page Route Content -->
	<slot />
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
	:global(.tp-dfwv) {
		top: 100px !important;
	}
</style>
