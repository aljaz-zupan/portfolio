<script lang="ts">
	import { T, useLoader } from '@threlte/core';
	import { browser } from '$app/environment';
	import { Grid } from '@threlte/extras';
	import Camera from './Camera.svelte';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
	import { onMount, onDestroy } from 'svelte';
	import { Pane } from 'tweakpane';

	const carParams = {
		position: { x: -2, y: 0, z: 5 }
	};

	const css_variable = document.querySelector(':root');

	function return_RGB_value(variable: string = '--color-primary-500'): string {
		if (css_variable === null) return '';
		const value = getComputedStyle(css_variable);
		const variable_value = value.getPropertyValue(variable);
		const variable_opacity = value.getPropertyValue('--tw-text-opacity');
		const [h, s, l] = variable_value.split(' ');
		return `rgb(${h}, ${s}, ${l})`;
	}

	const gltf = useLoader(GLTFLoader).load('./supercar_gemera/scene.gltf');

	let rotation: number = 0;
	let y = 0;

	onMount(() => {
		const handleScroll = () => {
			rotation = y * 0.1;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	$: {
		rotation = y * 0.1;
		console.log('rotation', rotation);
	}
	if (browser) {
		const pane = new Pane({ title: 'Scene' });

		const carControls = pane.addFolder({ title: 'Car' });
		carControls.addBinding(carParams, 'position');

		carControls.on('change', (value) => {
			carParams.position = value as any;
		});
	}
</script>

<svelte:window bind:scrollY={y} />

<Camera rotation />
<T.DirectionalLight position={[0, 10, 10]} intensity={1} />
<Grid
	position.y={-0.001}
	cellColor={return_RGB_value('--color-tertiary-700')}
	sectionColor={return_RGB_value('--color-primary-500')}
	sectionThickness={2}
	fadeDistance={30}
	fadeStrength={2}
	cellSize={1}
	cellThickness={1.5}
	infiniteGrid={true}
/>

{#if $gltf && browser}
	<T
		is={$gltf.scene}
		scale={0.2}
		castShadow={true}
		receiveShadow={true}
		position={[carParams.position.x, carParams.position.y, carParams.position.z]}
	/>
{/if}
