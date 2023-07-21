<script lang="ts">
	import { T, useLoader } from '@threlte/core';
	import { Grid, GLTF, ContactShadows, useGltf } from '@threlte/extras';
	import { AmbientLight, MeshBasicMaterial, PointLight, SphereGeometry } from 'three';
	import Camera from './Camera.svelte';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

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
	const gltf = useLoader(GLTFLoader).load('/supercat_gemera/scene.gltf');
</script>

<Camera />
<!-- <T.DirectionalLight position={[0, 10, 10]} castShadow /> -->
<!-- <T.SpotLight color={'bg-blue-500'} position={[0, 10, 0]} />-->
<T.SpotLight color={'bg-blue-700'} position={[0, 10, -40]} />
<T.SpotLight position={[40, 10, 10]} />
<T.SpotLight position={[0, 10, 30]} />
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

{#await useGltf('./supercar_gemera/scene.gltf') then gltf}
	<T is={gltf.scene} scale={0.2} castShadow={true} receiveShadow={true} position={[-2, 0, 5]} />
{/await}

<!-- <ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} /> -->

<!-- <T.Mesh
	position={[0, 3, 0]}
	material={new MeshBasicMaterial({
		wireframe: true,
		color: return_RGB_value('--color-tertiary-700')
	})}
	geometry={new SphereGeometry(3, 22, 20)}
/> -->
