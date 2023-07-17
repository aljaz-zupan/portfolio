<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
</script>

<T.PerspectiveCamera makeDefault position={[0, 12, 20]} fov={36} target={[0, 0, 0]}>
	<OrbitControls
		autoRotate
		autoRotateSpeed={2}
		enabled={false}
		enableDamping={false}
		enablePan={false}
		enableRotate={false}
		enableZoom={false}
	/>
</T.PerspectiveCamera>
