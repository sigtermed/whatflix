<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<div class="p-6 flex flex-col md:flex-row md:flex-wrap gap-4 justify-center">
		{#each data.movies as m}
			<div class="group relative w-full h-auto border rounded-md md:w-1/4 max-w-ms">
				<img
					class="rounded-md"
					src={'https://image.tmdb.org/t/p/w780' + (m.backdrop_path || m.poster_path)}
					alt={m.title}
				/>
				<div
					class="absolute bottom-0 left-0 bg-black opacity-60 w-full px-2 py-6 h-auto text-white group-hover:opacity-95 rounded-b-md"
				>
					<h1 class="font-medium">{m.title}</h1>
					{#if m.overview}
						<div class="w-full border my-2" />
						<p>{m.overview}</p>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</main>
