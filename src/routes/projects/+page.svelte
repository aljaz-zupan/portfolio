<script lang="ts">
	import Article from '$lib/articles/Article.svelte';
	import { CircleBufferGeometry, MeshStandardMaterial, BoxBufferGeometry, DoubleSide } from 'three';
	import { DEG2RAD } from 'three/src/math/MathUtils';
	import {
		AmbientLight,
		Canvas,
		DirectionalLight,
		Group,
		HemisphereLight,
		Mesh,
		OrbitControls,
		PerspectiveCamera
	} from '@threlte/core';
	import { spring } from 'svelte/motion';

	const scale = spring(1);
</script>

<Article>
	<h1>Projects</h1>
	<h2>Trelte</h2>
	<h3>Cube</h3>
	<p>Some cube experiment.</p>

	<div class="mockup-window border bg-base-300">
		<Canvas>
			<PerspectiveCamera position={{ x: 10, y: 10, z: 10 }} fov={24}>
				<OrbitControls
					maxPolarAngle={DEG2RAD * 80}
					autoRotate={false}
					enableZoom={false}
					target={{ y: 0.5 }}
				/>
			</PerspectiveCamera>

			<DirectionalLight shadow position={{ x: 3, y: 10, z: 10 }} />
			<DirectionalLight position={{ x: -3, y: 10, z: -10 }} intensity={0.2} />
			<AmbientLight intensity={0.2} />

			<!-- Cube -->
			<Group scale={$scale}>
				<Mesh
					interactive
					on:pointerenter={() => ($scale = 2)}
					on:pointerleave={() => ($scale = 1)}
					position={{ y: 0.5 }}
					castShadow
					geometry={new BoxBufferGeometry(1, 1, 1)}
					material={new MeshStandardMaterial({ color: '#333333' })}
				/>
			</Group>

			<!-- Floor -->
			<Mesh
				receiveShadow
				rotation={{ x: -90 * (Math.PI / 180) }}
				geometry={new CircleBufferGeometry(3, 72)}
				material={new MeshStandardMaterial({ side: DoubleSide, color: 'white' })}
			/>
		</Canvas>
	</div>
	<h2>Svelte</h2>
	<h2>Rust</h2>
	<h2>Python</h2>
</Article>

<style>
	div,
	canvas {
		height: 35rem;
		width: 100%;
	}
</style>
