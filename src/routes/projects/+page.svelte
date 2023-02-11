<script lang="ts">
	import { projects } from './projects';
</script>

<h1>Projects</h1>
<p>Here I will have some coding projects, chalanges and experiments.</p>
<h3>Future project ideas</h3>

<ul>
	{#each projects as project}
		<li>
			<b class="color-red-300">{project.title}</b> - {project.description} [<a
				href={project.website}>{project.website}</a
			>]
		</li>
	{/each}
</ul>
