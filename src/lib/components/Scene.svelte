<script lang="ts">
	import { T } from '@threlte/core';
	import { Grid, ContactShadows } from '@threlte/extras';
	import { MeshBasicMaterial, SphereGeometry } from 'three';
	import Camera from './Camera.svelte';
</script>

<Camera />

<Grid
	position.y={-0.001}
	cellColor="#ffffff"
	sectionColor="#d4163c"
	sectionThickness={2}
	fadeDistance={30}
	fadeStrength={2}
	cellSize={1}
	infiniteGrid={true}
/>

<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />

<T.Mesh
	position={[0, 3, 0]}
	material={new MeshBasicMaterial({ wireframe: true, color: '#fff' })}
	geometry={new SphereGeometry(3, 22, 20)}
/>
