import React from "react";
import Container from "./styles";
import { getPokemons } from "../../../services/api";
import { WordInput } from "../../molecules/wordInput";

export const Home = () => {
    // const pokemons = getPokemons();
    // console.log(pokemons);
    return (
        <Container>
            <WordInput size={5} />
        </Container>
    );
};
