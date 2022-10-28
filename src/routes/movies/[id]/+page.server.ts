import { getMovie } from "$lib/server/tmdb";
import type { PageServerLoadEvent } from ".svelte-kit/types/src/routes/movies/[id]/$types";

export async function load({ params }: PageServerLoadEvent) {
    const movie = getMovie(params.id)
    return {
        movie: movie,
    }
}
