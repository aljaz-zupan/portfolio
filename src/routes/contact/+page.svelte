<script lang="ts">
	import Article from '$lib/articles/Article.svelte';
</script>

<Article>
	<h1>Contact</h1>
	<form method="post">
		<div class="form-control w-full sm:min-w-xs md:min-w-sm xl:min-w-md max-w-md relative mt-12">
			<input
				name="name"
				type="text"
				id="name"
				placeholder=""
				class="input input-bordered w-full min-w-sm max-w-md"
			/>
			<label class="label" for="name">
				<span class="label-text absolute top-4 left-4">What is your name?</span>
			</label>
		</div>
		<div class="form-control w-full min-w-sm max-w-md relative">
			<input
				name="email"
				type="email"
				id="email"
				placeholder=""
				class="input input-bordered w-full min-w-sm max-w-md"
			/>
			<label class="label" for="email">
				<span class="label-text absolute top-4 left-4">What is your email?</span>
			</label>
		</div>
	</form>
</Article>

<style lang="postcss">
	input:not(:placeholder-shown) ~ label > .label-text {
		@apply bg-base-100 -translate-y-7 -translate-x-2 px-1 text-opacity-60;
	}
	input:focus:placeholder-shown ~ label > .label-text {
		@apply bg-base-100 transform -translate-y-7 -translate-x-2 px-1 text-opacity-60;
	}

	.label-text {
		@apply transition-all ease-out duration-200;
	}
</style>
