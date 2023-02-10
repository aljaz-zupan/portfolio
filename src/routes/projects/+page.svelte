<script lang="ts">
	import { projects } from "./projects";}
	import type {Project} from './projects'
</script>

<h1>Projects</h1>
<p>Here I will have some coding projects, chalanges and experiments.</p>
<h3>Future project ideas</h3>

<ul>
	{#each projects as project}
		<li>
			{project.title}
			{project.description}
			{project.website}
		</li>
	{/each}
</ul>
<ul>
	<li>Product cards</li>
</ul>
