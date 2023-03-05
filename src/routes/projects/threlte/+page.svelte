<script>
	// import { useTweakpane } from './useTweakpane';
	import { Canvas } from '@threlte/core';
	import { World } from '@threlte/rapier';
	import Scene from '$lib/threlte/Scene.svelte';
	// const { pane, action } = useTweakpane();
	// pane.addBlade({
	// 	view: 'text',
	// 	text: "Use the 'wasd' keys to move around",
	// 	lineCount: 3
	// });

	const options = {
		width: 600,
		height: 300
	};
</script>

<!-- <div use:action /> -->

<div>
	<Canvas size={options}>
		<World>
			<Scene />
		</World>
	</Canvas>
</div>

<style>
	div {
		height: 600px;
	}
</style>
