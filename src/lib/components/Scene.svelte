<script lang="ts">
	import { T } from '@threlte/core';
	import { Grid, ContactShadows } from '@threlte/extras';
	import { MeshBasicMaterial, SphereGeometry } from 'three';
	import Camera from './Camera.svelte';

	const css_variable = document.querySelector(':root');

	function return_HSL_value(variable: string = '--color-primary-500'): string {
		if (css_variable === null) return '';
		const value = getComputedStyle(css_variable);
		const variable_value = value.getPropertyValue(variable);
		// console.log('variable value', variable_value);
		const [h, s, l] = variable_value.split(' ');
		return `hsl(${h}, ${s}%, ${l}%)`;
	}
</script>

<Camera />

<Grid
	position.y={-0.001}
	cellColor="#ffffff"
	sectionColor={return_HSL_value('--color-primary-500')}
	sectionThickness={2}
	fadeDistance={30}
	fadeStrength={2}
	cellSize={1}
	infiniteGrid={true}
/>

<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />

<T.Mesh
	position={[0, 3, 0]}
	material={new MeshBasicMaterial({ wireframe: true, color: 'hsl(212, 22%, 60%)' })}
	geometry={new SphereGeometry(3, 22, 20)}
/>
