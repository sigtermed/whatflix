import { writable } from "svelte/store";
import type { Movie } from "./types";
import { browser } from '$app/environment';

const stateKey = "whatflix_search"

function loadSearchState() {
    let state: SearchState | null = null;
    if (browser) {
        try {
            state = JSON.parse(localStorage.getItem(stateKey) || "null")
        } catch (error) { }
    }

    if (!state) {
        state = {
            query: "",
            results: [],
            error: "",
            ongoing: false,
        }
    }

    return state;
}

function saveState(state: SearchState) {
    if (browser) {
        localStorage.setItem(stateKey, JSON.stringify(state))
    }
}

export interface SearchState {
    query: string,
    results: Movie[],
    error?: string,
    ongoing: boolean,
}

export const darkMode = writable(true);

export const searchState = writable<SearchState>(loadSearchState())

searchState.subscribe((state) => {
    saveState(state)
})
