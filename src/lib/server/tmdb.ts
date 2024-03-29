import type { Genre, Movie, MovieDetail } from "$lib/types"

const apiKey = import.meta.env.VITE_TMDB_KEY
const v3BaseUrl = "https://api.themoviedb.org/3"
const imageUrl = "https://image.tmdb.org/t/p/w780"

let genres: Genre[] = [];

export async function getGenreForId(id: number) {
    if (genres.length === 0) {
        const params = new URLSearchParams()
        params.set("api_key", apiKey)
        params.set("language", "en-US")

        const u = new URL(`${v3BaseUrl}/genre/movie/list`)
        u.search = params.toString();

        const resp = await fetch(u).then(resp => resp.json())
        genres = resp.genres as Genre[]
    }

    const genre = genres.find(g => g.id === id)
    return genre?.name || "unknown";
}

export async function discoverMovie() {
    const params = new URLSearchParams()
    params.set("api_key", apiKey)
    params.set("language", "en-US")
    params.set("sort_by", "primary_release_date.desc")

    const u = new URL(`${v3BaseUrl}/discover/movie`)
    u.search = params.toString();


    const resp = await fetch(u).then(resp => resp.json())
    return resp.results as Movie[]
}

export async function expandMovie(movie: Movie) {
    movie.genres = await Promise.all(movie.genre_ids.map(async (gid) => {
        return await getGenreForId(gid)
    }))
    return movie
}

export async function searchMovie(title: string) {
    const params = new URLSearchParams()
    params.set("api_key", apiKey)
    params.set("language", "en-US")
    params.set("query", title)

    const u = new URL(`${v3BaseUrl}/search/movie`)
    u.search = params.toString();

    const resp = await fetch(u).then(resp => resp.json())
    const moviesFuture = ((resp.results || []) as Movie[])
    const movies = await Promise.all(moviesFuture.map(async (m) => expandMovie(m)))
    return movies.filter(f => f !== null)
}

export async function getMovie(id: string) {
    const params = new URLSearchParams()
    params.set("api_key", apiKey)
    params.set("language", "en-US")

    const u = new URL(`${v3BaseUrl}/movie/${id}`)
    u.search = params.toString();

    const resp = await fetch(u).then(resp => resp.json())
    const movie = resp as MovieDetail
    if (movie.backdrop_path) {
        movie.backdrop_path = `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
    }
    return movie
}
