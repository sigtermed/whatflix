import { generateResult } from "$lib/server/gpt3";
import { searchMovie } from "$lib/server/tmdb";
import { json, type RequestEvent } from "@sveltejs/kit";

export async function GET({ url }: RequestEvent) {
    const query = url.searchParams.get("q")
    if (!query) {
        return json({
            query: null,
            movies: [],
        })
    }

    const result = await generateResult(query);
    const searchAll = result.answers?.map(async (title) => {
        const results = await searchMovie(title)
        if (results.length > 0) {
            const m = results[0]
            m.backdrop_path = "https://image.tmdb.org/t/p/w780" + m.backdrop_path
        }
        return results[0]
    }) || []

    const movies = await (await Promise.all(searchAll)).flat();

    return json({
        query: query,
        movies: movies,
    })
}
