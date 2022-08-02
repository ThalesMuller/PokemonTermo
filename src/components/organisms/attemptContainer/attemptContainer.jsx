import React from "react";
import { WordInput } from "../../molecules/wordInput";
import { useGame } from "../../../hooks/useGame";
import Container from "./styles";

export const AttemptContainer = () => {
    const { todayPokemon } = useGame();

    return (
        <Container>
            <WordInput size={todayPokemon.length} state='error' />
            <WordInput size={todayPokemon.length} state='warn' />
            <WordInput size={todayPokemon.length} state='success' />
            <WordInput size={todayPokemon.length} state='current' />
            <WordInput size={todayPokemon.length} state='standby' />
            <WordInput size={todayPokemon.length} state='standby' />
        </Container>
    );
};
