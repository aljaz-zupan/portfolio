<script lang="ts">
	import { T } from '@threlte/core';
	import { Grid, ContactShadows } from '@threlte/extras';
	import { MeshBasicMaterial, SphereGeometry } from 'three';
	import Camera from './Camera.svelte';

	const css_variable = document.querySelector(':root');

	function return_RGB_value(variable: string = '--color-primary-500'): string {
		if (css_variable === null) return '';
		const value = getComputedStyle(css_variable);
		const variable_value = value.getPropertyValue(variable);
		const variable_opacity = value.getPropertyValue('--tw-text-opacity');
		console.log('variable value', variable_value);
		const [h, s, l] = variable_value.split(' ');
		/* return `rgba(var(--color-primary-500) / var(--tw-text-opacity))`; */
		return `rgb(${h}, ${s}, ${l})`;
	}
</script>

<Camera />

<Grid
	position.y={-0.001}
	cellColor={return_RGB_value('--color-tertiary-700')}
	sectionColor={return_RGB_value('--color-primary-500')}
	sectionThickness={5}
	fadeDistance={30}
	fadeStrength={2}
	cellSize={1}
	cellThickness={1.5}
	infiniteGrid={true}
/>

<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />

<T.Mesh
	position={[0, 3, 0]}
	material={new MeshBasicMaterial({
		wireframe: true,
		color: return_RGB_value('--color-tertiary-700')
	})}
	geometry={new SphereGeometry(3, 22, 20)}
/>
