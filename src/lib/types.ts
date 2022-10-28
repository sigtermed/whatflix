export type Genre = {
    id: number
    name: string
}

export type Movie = {
    id: number;
    adult: boolean,
    backdrop_path: string;
    poster_path: string;
    original_title: string;
    original_language: string;
    overview: string;
    title: string;
    genres: string[];
    genre_ids: number[];
    [key: string]: any;
}
