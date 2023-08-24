<script lang="ts">
	import { T } from '@threlte/core';
	export let cameraParams = {
		position: {
			x:15,
			y:12,
			z:20
		}
	};
</script>

<T.PerspectiveCamera
	makeDefault
	position={[cameraParams.position.x, cameraParams.position.y, cameraParams.position.z]}
	fov={40}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
		0;
	}}
/>
