import React from "react";
import { AttemptContainer } from "../../organisms/attemptContainer";
import { VirtualKeyboard } from "../../organisms/virtualKeyboard";
import { usePokemon } from "../../../hooks/usePokemon";
import Container from "./styles";

export const Home = () => {
    const { pokemons } = usePokemon();
    console.log(pokemons);

    return (
        <Container>
            <AttemptContainer />
            <VirtualKeyboard />
        </Container>
    );
};
