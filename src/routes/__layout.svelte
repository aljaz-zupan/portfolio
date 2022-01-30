<script lang="ts">
	import '../app.css';
	import Menu from '$lib/Menu.svelte';
</script>

<div class="flex-grow h-screen">
	<div class="flex flex-col items-center flex-grow h-full text-center">
		<div class="flex flex-col items-center flex-1 w-full h-full pt-10 overflow-y-auto bg-base-200">
			<div class="avatar">
				<div class="w-32 h-32 mask mask-squircle">
					<img src="https://i.pravatar.cc/128?img=54" />
				</div>
			</div>
			<div class="my-4 text-2xl font-bold">Aljaž Zupan</div>
			<p class="container text-sm px-4">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, quo. Tenetur ipsa esse
				possimus labore, illum ducimus, mollitia nobis reiciendis illo magnam culpa amet quasi dicta
				atque deleniti temporibus? Tempore perferendis earum necessitatibus rerum, dolorem quod,
				repellat accusamus nihil quasi pariatur iusto corporis quae ex officiis! Rem odio quaerat
				inventore veniam distinctio assumenda, asperiores omnis consequuntur quae nemo ad
				exercitationem dolores natus molestiae, beatae odit cum ex perspiciatis. Veniam amet debitis
				perspiciatis unde, quod voluptatem voluptatibus, cumque laudantium dicta, quas doloribus
				enim facere ad tempore. Unde nisi consequatur ipsum ad molestiae accusantium, maiores
				eveniet ullam minima mollitia enim dolores adipisci?
			</p>
			<div class="mt-4 mb-10">
				<button class="btn btn btn-primary btn-sm mt-4">Follow</button>
				<button class="btn btn btn-primary btn-outline btn-sm mt-4">Message</button>
			</div>
		</div>
		<ul class="menu justify-center flex-none w-full px-3 horizontal bg-base-100">
			<li>
				<a href=""
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
						/>
					</svg>
				</a>
			</li>
			<li>
				<a href=""
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
						/>
					</svg>
				</a>
			</li>
			<li>
				<a href=""
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
						/>
					</svg>
				</a>
			</li>
			<li>
				<a href=""
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
						/>
					</svg>
				</a>
			</li>
			<li>
				<a href=""
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</a>
			</li>
		</ul>
	</div>
</div>
