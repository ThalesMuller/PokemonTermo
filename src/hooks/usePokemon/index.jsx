import React, { useCallback, useEffect, useState } from "react";
import { getAllPokemons, GENERATIONS } from "../../services/api";

const resetSyncDate = new Date("2022-08-09T00:00:00.000Z");

export const usePokemon = () => {
    const [pokemons, setPokemons] = useState(undefined);
    const [todayPokemon, setTodayPokemon] = useState(undefined);

    const isOnLocalStorage = () => {
        return localStorage.getItem("pokemon") !== null;
    };

    const getPokemonFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem("pokemon"));
    };
    const setPokemonToLocalStorage = (pokemon) => {
        localStorage.setItem("pokemon", JSON.stringify(pokemon));
        localStorage.setItem("pokemon_sync_date", new Date().toISOString());
    };
    const getLastSyncDate = () => {
        return new Date(localStorage.getItem("pokemon_sync_date"));
    };

    const sanitazePokemonList = (pokemonList) => {
        return pokemonList
            .map((pokemon) => {
                if (pokemon.name === "nidoran-f") return "nidoran";

                return pokemon.name.toLowerCase();
            })
            .filter(
                (pokemon) =>
                    pokemon.length > 4 && pokemon.length < 10 && !pokemon.includes("-") && !/\d/.test("pokemon"),
            );
    };

    const getPokemonFromApi = async () => {
        let result = await getAllPokemons(GENERATIONS[6].until);
        result = await sanitazePokemonList(result.results);

        return result;
    };

    const getPokemons = async () => {
        if (isOnLocalStorage() && getLastSyncDate() > resetSyncDate) {
            return getPokemonFromLocalStorage();
        }
        const result = await getPokemonFromApi();

        setPokemonToLocalStorage(result);
        return result;
    };

    const loadPokemons = async () => {
        console.log(pokemons);
        const result = await getPokemons();
        setPokemons(result);
    };

    const getTodayPokemon = useCallback(() => {
        const timestamp = Date.now();
        const index = Math.floor(timestamp / process.env.REACT_APP_GAME_START_DAY_TIMESTAMP) % pokemons.length;

        return pokemons[index];
    }, [pokemons]);

    useEffect(() => {
        if (!pokemons && !todayPokemon) loadPokemons();
    }, []);

    useEffect(() => {
        if (pokemons && !todayPokemon) setTodayPokemon(getTodayPokemon());
    }, [pokemons]);

    return { todayPokemon, pokemons };
};
