<script lang="ts">
	import { T } from '@threlte/core';
	import { Color, type Vector3Tuple } from 'three';

	// Scroll position store
	import { scrollPosition } from '../../store/scroll_store';

	let meshRotation = 0;
	let [cameraX, cameraY, cameraZ] = Array(3).fill(0);
	const cameraPositionDefault: Vector3Tuple = [10, 10, 10];
	let cameraPosition: Vector3Tuple = [10, 10, 10];
	let scale = 1;
	$: {
		meshRotation = $scrollPosition * 0.001;
		cameraX = $scrollPosition * 0.0003 + cameraPositionDefault[0];
		cameraY = $scrollPosition * 0.002 + cameraPositionDefault[1];

		if ($scrollPosition < 2000) {
			cameraZ = $scrollPosition * 0.009 + cameraPositionDefault[2];
		} else {
			cameraZ = $scrollPosition * -0.0009 + cameraPositionDefault[2];
		}

		cameraPosition = [cameraX, cameraY, cameraZ];
		scale = $scrollPosition * 0.0005 + 1;
	}

	let meshColor = new Color('#fe3d00');
</script>

<T.PerspectiveCamera
	makeDefault
	fov={40}
	position={cameraPosition}
	on:create={({ ref }) => {
		ref.lookAt(0, 1, 0);
	}}
/>

<T.DirectionalLight position={[0, 10, 5]} />

<T.Mesh {scale} rotation.y={meshRotation} position={[0, 0, 0]}>
	<T.BoxGeometry args={[1, 2, 1]} />
	<T.MeshBasicMaterial color={meshColor} />
</T.Mesh>
