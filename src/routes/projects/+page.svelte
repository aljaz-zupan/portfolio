<script lang="ts">
	import Article from '$lib/articles/Article.svelte';
	import { GLTF } from '@threlte/extras';
	import {
		AmbientLight,
		Canvas,
		DirectionalLight,
		SpotLight,
		OrbitControls,
		PerspectiveCamera,
		type Scale
	} from '@threlte/core';
	import type { Mesh } from 'three';
	const mobilePhone = '3d/huawei_mate40pro/scene.gltf';
	let mesh: Mesh;
	let scaleValue: Scale = 1;
</script>

<Article>
	<h1>Projects</h1>
	<p>This is a page of project and experiments I have done, will do and would like to do</p>
	<h2>Trelte and three.js</h2>
	<h3>Product 3D</h3>
	<div class="mockup-window border bg-base-300">
		<Canvas>
			<PerspectiveCamera position={{ x: 0, y: 0, z: 0.6 }}>
				<OrbitControls autoRotate={true} enableZoom={true} target={{ y: 0 }} />
			</PerspectiveCamera>
			<GLTF position={{ x: 0, y: -0.2, z: 0 }} url={mobilePhone} scale={scaleValue} bind:mesh />
			<DirectionalLight shadow position={{ x: 3, y: 10, z: 10 }} />
			<DirectionalLight position={{ x: -3, y: 7, z: -10 }} intensity={0.6} />
			<DirectionalLight position={{ x: -3, y: 6, z: -10 }} intensity={0.6} />
			<SpotLight position={{ x: -3, y: 3, z: -13 }} target={mesh} />
			<AmbientLight intensity={1} />
		</Canvas>
	</div>
	<h2>Svelte</h2>
	<h2>Rust</h2>
	<h2>Python</h2>
</Article>

<style>
	div {
		height: 35rem;
		width: 100%;
	}
</style>
