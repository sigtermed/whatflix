<script lang="ts">
	import type { Movie } from '$lib/types';

	export let movie: Movie;
</script>

<a href={`/movies/${movie.id}`} class="relative group rounded-md cursor-pointer">
	<img class="w-full h-full rounded-md" src={movie.backdrop_path} alt="" />
	<div
		class="absolute rounded-b-md bottom-0 left-0 w-full bg-black bg-opacity-60 p-2 group-hover:bg-opacity-90 flex flex-col gap-2 text-slate-500 group-hover:text-white"
	>
		<h1 class="">{movie.title}</h1>
		<div class="flex flex-row flex-wrap gap-1 justify-start items-center">
			{#each movie.genres as g}
				<span class="text-xs border px-1 rounded w-auto">{g}</span>
			{/each}
		</div>
	</div>
</a>
