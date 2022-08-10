import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_POKEAPI_URL,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});

export const GENERATIONS = {
    1: {
        name: "I",
        url: "https://pokeapi.co/api/v2/generation/1/",
        quantity: 151,
        until: 151,
    },
    2: {
        name: "II",
        url: "https://pokeapi.co/api/v2/generation/2/",
        quantity: 100,
        until: 251,
    },
    3: {
        name: "III",
        url: "https://pokeapi.co/api/v2/generation/3/",
        quantity: 135,
        until: 386,
    },
    4: {
        name: "IV",
        url: "https://pokeapi.co/api/v2/generation/4/",
        quantity: 107,
        until: 493,
    },
    5: {
        name: "V",
        url: "https://pokeapi.co/api/v2/generation/5/",
        quantity: 156,
        until: 649,
    },
    6: {
        name: "VI",
        url: "https://pokeapi.co/api/v2/generation/6/",
        quantity: 72,
        until: 721,
    },
    7: {
        name: "VII",
        url: "https://pokeapi.co/api/v2/generation/7/",
        quantity: 88,
        until: 809,
    },
    8: {
        name: "VIII",
        url: "https://pokeapi.co/api/v2/generation/8/",
        quantity: 96,
        until: 905,
    },
    9: {
        name: "IX",
        url: "https://pokeapi.co/api/v2/generation/9/",
        quantity: 8,
        until: 913,
    },
};

export const getAllPokemons = async (limit, offset) => {
    try {
        const response = await api.get(`/pokemon?limit=${limit || 100000}&offset=${offset || 0}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
export const getAllPokemonsUntilSunAndMoon = async () => {
    try {
        const response = await api.get("/pokemon?limit=649&offset=0");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getPokemons = async (pokemon) => {
    try {
        const response = await api.get("/pokemon/" + pokemon);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
