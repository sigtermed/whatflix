<script lang="ts">
	import MovieCard from '$lib/components/MovieCard.svelte';
	import type { Movie } from '$lib/types';
	import { searchState, type SearchState } from '$lib/uistore';

	let query = '';

	async function onSearchKeyUp(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			searchState.update((v) => ({ ...v, ongoing: true }));
			const resultState = await fetch(`/api/search?q=${query}`)
				.then(async (resp) => {
					const data = await resp.json();
					return {
						query: query,
						results: data.movies as Movie[],
						ongoing: false
					} as SearchState;
				})
				.catch((reason) => {
					return {
						query: query,
						error: reason,
						ongoing: false
					} as SearchState;
				});

			searchState.set(resultState);
			query = '';
		}
	}

	$: searching = $searchState.ongoing;
	$: movies = $searchState.results || [];
	$: lastQuery = $searchState.query;
</script>

<div class="w-full h-full flex flex-col mb-10">
	<!-- navbar -->
	<nav class="w-full p-2 flex flex-row justify-between">
		<!-- logo -->
		<a href="/" class="flex flex-row gap-2 items-center p-1">
			<img class="w-12" src="/favicon.png" alt="whatflix" />
			<h1 class="hidden md:inline-block text-3xl font-bold tracking-wider text-red-600">
				Whatflix
			</h1>
		</a>

		<!-- search input -->
		<div class="flex flex-row w-full items-center justify-end">
			<input
				class="bg-transparent border border-slate-600 px-2 py-2 rounded outline-none w-full h-min text-md md:w-3/6 lg:w-2/6"
				type="text"
				placeholder="Describe your search here..."
				bind:value={query}
				on:keyup={onSearchKeyUp}
			/>
		</div>
	</nav>

	<!-- content -->
	<div class="w-full h-full flex flex-col items-center overflow-x-hidden my-6">
		{#if searching}
			<!-- show search progess -->
			<div class="w-full h-full grid place-items-center">
				<progress class="progress progress-error border border-slate-700 w-56" />
			</div>
		{:else if movies.length === 0}
			<div class="w-full h-full grid place-items-center">
				<div class="flex flex-col items-center gap-2">
					<h1 class="text-2xl text-slate-600">No Results found</h1>
					<p class="text-slate-400 max-w-md text-center">
						Describe what type of movie you want. For example, you can say "movies like
						interstellar".
					</p>
				</div>
			</div>
		{:else}
			<h1>Showing results for: "{lastQuery}"</h1>
			<!-- show results -->
			<div class="w-11/12 h-full m-12 grid gap-4 sm:grid-cols-3 mt-6">
				{#each movies as movie}
					<MovieCard {movie} />
				{/each}
			</div>
		{/if}
	</div>
</div>
