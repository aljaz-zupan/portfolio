<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';

	export let rotation;
</script>

<T.PerspectiveCamera
	makeDefault
	position={[15, 12, 20]}
	fov={40}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
		0;
	}}
/>
