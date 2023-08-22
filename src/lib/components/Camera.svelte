<script lang="ts">
	import { T } from '@threlte/core';
	export let cameraParams = {
		position: [15, 12, 20] as [number, number, number]
	};
</script>

<T.PerspectiveCamera
	makeDefault
	position={cameraParams.position}
	fov={40}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
		0;
	}}
/>
