import React, { useState, useCallback, useContext } from "react";
import { WordInput } from "../../molecules/wordInput";
import { usePokemon } from "../../../hooks/usePokemon";
import AttemptsContext from "../../../contexts/attemptsContext";
import Container from "./styles";

export const AttemptContainer = () => {
    const { todayPokemon } = usePokemon();
    const { attempts } = useContext(AttemptsContext);

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
                    selectedIndex={attempt.selectedIndex}
                />
            );
        });
    }, [attempts, todayPokemon]);

    if (!todayPokemon || !attempts) return <>loading...</>;

    return <Container>{renderAttempts()}</Container>;
};
