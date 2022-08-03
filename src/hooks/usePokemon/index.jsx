import React, { useCallback, useEffect, useState } from "react";
import { getAllPokemons, GENERATIONS } from "../../services/api";

export const usePokemon = () => {
    const [pokemons, setPokemons] = useState(null);
    const [todayPokemon, setTodayPokemon] = useState(null);

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

    const loadPokemons = async () => {
        if (isOnLocalStorage()) {
            setPokemons(getPokemonFromLocalStorage());
            return;
        }

        let result = await getAllPokemons(GENERATIONS[6].until);
        result = await result.results
            .map((pokemon) => {
                if (pokemon.name.includes("nidoran")) return "nidoran";

                return pokemon.name;
            })
            .filter(
                (pokemon) =>
                    pokemon.length > 4 &&
                    pokemon.length < 10 &&
                    !pokemon.includes("-"),
            );

        setPokemons(result);
        setPokemonToLocalStorage(result);
    };

    const getTodayPokemon = useCallback(() => {
        const timestamp = Date.now();
        const index = Math.floor(timestamp / 86400000) % pokemons.length;

        return pokemons[index];
    }, [pokemons]);

    useEffect(() => {
        loadPokemons();
    }, []);

    useEffect(() => {
        if (pokemons) setTodayPokemon(getTodayPokemon());
    }, [pokemons]);

    return { todayPokemon };
};
