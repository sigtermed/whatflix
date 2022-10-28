<script lang="ts">
	import type { PageServerData } from '.svelte-kit/types/src/routes/movies/[id]/$types';

	export let data: PageServerData;

	$: movie = data.movie;
</script>

<div class="w-full h-full flex flex-col mb-10 text-white">
	<!-- navbar -->
	<nav class="w-full p-2 flex flex-row justify-between">
		<!-- logo -->
		<a href="/" class="flex flex-row gap-2 items-center p-1">
			<img class="w-12" src="/favicon.png" alt="whatflix" />
			<h1 class="inline-block text-3xl font-bold tracking-wider text-red-600">Whatflix</h1>
		</a>
	</nav>

	<!-- movie view -->
	<div class="w-full h-full p-2 flex flex-col items-center gap-2">
		<h1 class="text-2xl font-bold tracking-wider text-white">
			{movie.original_title}
		</h1>
		<h3>{movie.tagline}</h3>
		<div class="w-full flex flex-col md:flex-row mt-6 gap-2 p-2 justify-center">
			<img class="max-w-2xl rounded-md" src={movie.backdrop_path} alt="" />
			<div class="flex flex-col gap-2">
				<p class="text-lg text-justify max-w-lg">{movie.overview}</p>
				<p class="text-xs">Released: {movie.release_date}</p>
				<p class="text-red-500">Rating: {movie.vote_average} (Votes: {movie.vote_count})</p>
				<div class="flex flex-row flex-wrap gap-2 ">
					{#each movie.genres as g}
						<span class="border px-1 text-xs rounded">{g.name}</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
