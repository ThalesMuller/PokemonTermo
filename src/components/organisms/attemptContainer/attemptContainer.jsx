import React, { useCallback, useContext } from "react";
import { WordInput } from "../../molecules/wordInput";
import AttemptsContext from "../../../contexts/attemptsContext";
import Container from "./styles";

export const AttemptContainer = () => {
    const { attempts } = useContext(AttemptsContext);

    const renderAttempts = useCallback(() => {
        return attempts.map((attempt, index) => {
            return (
                <WordInput
                    key={index}
                    state={attempt.state}
                    values={attempt.values}
                    selectedIndex={attempt.selectedIndex}
                />
            );
        });
    }, [attempts]);

    if (!attempts) return <>loading...</>;

    return <Container>{renderAttempts()}</Container>;
};
