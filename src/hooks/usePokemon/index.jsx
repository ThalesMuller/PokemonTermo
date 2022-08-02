import React, { useEffect } from "react";
import { getAllPokemons, GENERATIONS } from "../../services/api";

export const usePokemon = () => {
    const [pokemons, setPokemons] = React.useState(null);

    const isOnLocalStorage = () => {
        return localStorage.getItem("pokemon") !== null;
    };

    const getPokemonFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem("pokemon"));
    };
    const setPokemonToLocalStorage = (pokemon) => {
        localStorage.setItem("pokemon", JSON.stringify(pokemon));
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

    useEffect(() => {
        loadPokemons();
    }, []);

    return { pokemons };
};
