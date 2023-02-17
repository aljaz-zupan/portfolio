<script lang="ts">
	export let title: string = 'AZ';
	const titleArray = title.split('');
</script>

<a href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost px-2"
	><div class="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-4xl">
		<span class="lowercase left-6">{titleArray[0]}</span>
		<span class="text-base-content uppercase">{titleArray[1]}</span>
	</div></a
>
