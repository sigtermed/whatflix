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

export type MovieDetail = {
    backdrop_path: string;
    budget: number;
    genres: { id: number, name: string }[]
    homepage: string;
    id: number;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    tagline: string;
    vote_average: number;
    vote_count: number
}

const sample = {
    adult: false,
    backdrop_path: '/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg',
    belongs_to_collection: null,
    budget: 60000000,
    genres: [
        { id: 14, name: 'Fantasy' },
        { id: 18, name: 'Drama' },
        { id: 80, name: 'Crime' }
    ],
    homepage: 'http://thegreenmile.warnerbros.com/',
    id: 497,
    imdb_id: 'tt0120689',
    original_language: 'en',
    original_title: 'The Green Mile',
    overview: "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
    popularity: 84.738,
    poster_path: '/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
    production_companies: [
        {
            id: 97,
            logo_path: '/7znWcbDd4PcJzJUlJxYqAlPPykp.png',
            name: 'Castle Rock Entertainment',
            origin_country: 'US'
        },
        {
            id: 174,
            logo_path: '/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png',
            name: 'Warner Bros. Pictures',
            origin_country: 'US'
        },
        {
            id: 3982,
            logo_path: '/bli7HkPOXOEWsDwDK0W7XXfeUU2.png',
            name: 'Darkwoods Productions',
            origin_country: 'US'
        }
    ],
    production_countries: [{ iso_3166_1: 'US', name: 'United States of America' }],
    release_date: '1999-12-10',
    revenue: 286801374,
    runtime: 189,
    spoken_languages: [
        { english_name: 'French', iso_639_1: 'fr', name: 'Français' },
        { english_name: 'English', iso_639_1: 'en', name: 'English' }
    ],
    status: 'Released',
    tagline: 'Miracles do happen.',
    title: 'The Green Mile',
    video: false,
    vote_average: 8.511,
    vote_count: 14549
}
