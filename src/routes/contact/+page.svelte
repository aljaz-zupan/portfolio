<script lang="ts">
	import { modeCurrent } from '@skeletonlabs/skeleton';
	import { enhance } from '$app/forms';
	import Section from '$lib/components/Section.svelte';
	export let form;
</script>

<Section class="m-auto w-full prose">
	<h1 class="h1 font-bold mb-4">Contact</h1>

	<form method="POST" use:enhance>
		<div class="grid grod-cols-1 md:grid-cols-2 md:gap-3">
			<div class="form-control w-full mb-4">
				<label class="label" for="name">
					<span class="label-text">What is your name?</span>
				</label>
				<input
					type="text"
					placeholder="Bob Ross"
					class="input input-bordered w-full"
					name="name"
					id="name"
					value={form?.data?.name ?? ''}
				/>
				{#if form?.errors?.name}
					<label class="label" for="name">
						<span class="label-text-alt text-error-500">{form?.errors?.name[0]}</span>
					</label>
				{/if}
			</div>
			<div class="form-control w-full mb-4">
				<label class="label" for="email">
					<span class="label-text">What is your contact info?</span>
				</label>
				<input
					type="text"
					placeholder="info@example.com"
					class="input input-bordered w-full"
					name="email"
					id="email"
					value={form?.data?.email ?? ''}
				/>
				{#if form?.errors?.email}
					<label class="label" for="email">
						<span class="label-text-alt text-error-500">{form?.errors?.email[0]}</span>
					</label>
				{/if}
			</div>
		</div>
		<div class="form-control w-full mb-4">
			<label class="label" for="message">
				<span class="label-text">Tell me someting...</span>
			</label>
			<textarea
				class="textarea textarea-bordered h-24"
				name="message"
				id="message"
				placeholder="Something...">{form?.data?.message ?? ''}</textarea
			>
			{#if form?.errors?.message}
				<label class="label" for="name">
					<span class="label-text-alt text-error-500">{form?.errors?.message[0]}</span>
				</label>
			{/if}
		</div>
		{#if form?.message}
			<div class="alert alert-{form?.type} shadow-lg mt-4">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span>{form?.message}</span>
				</div>
			</div>
		{/if}
		<div class="form-control w-full my-4">
			<button class="btn variant-filled-primary" type="submit">Submit</button>
		</div>
	</form>

	<p>There are also other ways you can contact me.</p>
	<ul>
		<li><a class="anchor" href="mailto:aljaz.zupan@gmail.com">Email</a></li>
		<li><a class="anchor" href="https://github.com/aljaz-zupan">Github</a></li>
		<li><a class="anchor" href="https://www.linkedin.com/in/aljaz-zupan">LinkedIn</a></li>
	</ul>
	<p>
		Or just <a rel="noreferrer" href="https://ko-fi.com/L4L2HM2EA" target="_blank"
			><img
				height="36"
				style="border:0px;height:36px; display: inline; margin-left: 1rem"
				src="https://storage.ko-fi.com/cdn/kofi1.png?v=3"
				alt="Buy Me a Coffee at ko-fi.com"
			/></a
		>
	</p>
</Section>
