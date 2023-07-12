<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls, Grid, ContactShadows } from '@threlte/extras';
	import { BoxGeometry, Mesh, MeshBasicMaterial, Sphere, SphereGeometry } from 'three';
	const boxColors = [
		'#3c42c4',
		'#6e51c8',
		'#a065cd',
		'#ce79d2',
		'#d68fb8',
		'#dda2a3',
		'#eac4ae',
		'#f4dfbe'
	];

    const sphere = new SphereGeometry(radius: 14, widthSegments:30, heightSegments:26)
</script>

<T.PerspectiveCamera makeDefault position={[0, 10, 20]} fov={36} target={[0, 0, 0]}>
	<OrbitControls autoRotate />
</T.PerspectiveCamera>

<Grid
	position.y={-0.001}
	cellColor="#ffffff"
	sectionColor="#ffffff"
	sectionThickness={0}
	fadeDistance={25}
	cellSize={2}
/>

<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />

<!-- Make a box in every second cell to show aligment -->

<!-- {#each { length: 10 } as _h, x}
	{#each { length: 10 } as _v, y}
		{#if x % 2 == 0 && y % 2 == 0}
			<T.Group position={[x - 4.5, 0.5, y - 4.5]}>
				<T.Mesh>
					<T.BoxGeometry />
					<T.MeshBasicMaterial
						args={[
							{
								color: boxColors[Math.floor(Math.random() * boxColors.length)],
								opacity: 0.9,
								transparent: true
							}
						]}
					/>
				</T.Mesh>
				<T.LineSegments>
					<T.EdgesGeometry args={[new BoxGeometry()]} />

					<T.MeshBasicMaterial
						args={[
							{
								color: #0059BA
							}
						]}
					/>
				</T.LineSegments>
			</T.Group>
		{/if}
	{/each}
{/each} -->

<T.Mesh
	position={[0, 1, 0]}
	geometry={new SphereGeometry(14, 25, 26)}
	material={new MeshBasicMaterial({ wireframe: true, color: '#0059BA' })}
/>
