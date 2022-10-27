import { discoverMovie } from '$lib/server/tmdb';
import type { PageLoadEvent } from './$types';

export async function load({ }: PageLoadEvent) {
    return {
        movies: discoverMovie(),
    }
}
