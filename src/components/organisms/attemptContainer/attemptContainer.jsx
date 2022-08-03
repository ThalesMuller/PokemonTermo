import React, { useState, useCallback } from "react";
import { WordInput } from "../../molecules/wordInput";
import { usePokemon } from "../../../hooks/usePokemon";
import { useGame, MAX_ATTEMPTS } from "../../../hooks/useGame";
import Container from "./styles";

export const AttemptContainer = () => {
    const { todayPokemon } = usePokemon();
    const { attempts } = useGame();

    const renderAttempts = useCallback(() => {
        if (!todayPokemon || !attempts) {
            return <>loading...</>;
        }

        return attempts.map((attempt, index) => {
            return (
                <WordInput
                    key={index}
                    size={todayPokemon.length}
                    state={attempt.state}
                    values={attempt.values}
                />
            );
        });
    }, [attempts, todayPokemon]);

    return <Container>{renderAttempts()}</Container>;
};
