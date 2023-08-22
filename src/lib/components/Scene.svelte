<script lang="ts">
	import { T, useLoader } from '@threlte/core';
	import { browser } from '$app/environment';
	import { Grid } from '@threlte/extras';
	import Camera from './Camera.svelte';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
	import { onMount } from 'svelte';
	import { BladeApi, Pane, TpChangeEvent } from 'tweakpane';
	import type { BladeController, View } from '@tweakpane/core';

	const carParams = {
		position: { x: -2, y: 0, z: 5 }
	};

	const cameraParams = {
		position: {
			x: 15,
			y: 12,
			z: 20
		}
	};

	interface Position {
		x: number;
		y: number;
		z: number;
	}

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

	let camera_position: number = 0;
	let y = 0;

	onMount(() => {
		const handleScroll = () => {
			camera_position = y * 0.1;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	$: {
		camera_position = y * 0.1;
		console.log('camera_position', camera_position);
	}
	if (browser) {
		const pane = new Pane({ title: 'Scene' });

		const carControls = pane.addFolder({ title: 'Car' });
		carControls.addBinding(carParams, 'position');

		carControls.on('change', ({ value: { x, y, z } }: any) => {
			console.log('onChange car controls', x, y, z);
			carParams.position.x = x;
			carParams.position.y = y;
			carParams.position.z = z;
		});

		const cameraFolder = pane.addFolder({
			title: 'Camera'
		});
		cameraFolder.addBinding(cameraParams, 'position');
	}
</script>

<svelte:window bind:scrollY={y} />

<Camera cameraParams />
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
