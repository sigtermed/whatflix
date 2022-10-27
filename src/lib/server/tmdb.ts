import type { Movie } from "$lib/types"

console.log(import.meta.env)

const apiKey = import.meta.env.VITE_TMDB_KEY
const v3BaseUrl = "https://api.themoviedb.org/3"

export async function discoverMovie() {
    const params = new URLSearchParams()
    params.set("api_key", apiKey)
    params.set("language", "en-US")
    params.set("sort_by", "primary_release_date.desc")

    const u = new URL(`${v3BaseUrl}/discover/movie`)
    u.search = params.toString();

    console.log(u.toString())

    const resp = await fetch(u).then(resp => resp.json())
    return resp.results as Movie[]
}
