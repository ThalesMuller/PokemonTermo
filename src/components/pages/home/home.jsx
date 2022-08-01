import React from "react";
import Container from "./styles";
import { getPokemons } from "../../../services/api";

export const Home = () => {
    const pokemons = getPokemons();
    console.log(pokemons);
    return <Container>teste</Container>;
};
