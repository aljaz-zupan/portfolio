<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
</script>

<T.PerspectiveCamera makeDefault position={[0, 12, 20]} fov={36} target={[0, 0, 0]}>
	<OrbitControls autoRotate enableZoom={false} enablePan={false} enableRotate={false} />
</T.PerspectiveCamera>
