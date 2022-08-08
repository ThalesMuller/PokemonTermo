import React, { useCallback } from "react";
import { CharInput } from "../../atoms/charInput";
import Container from "./styles";

export const WordInput = (props) => {
    const { state, values, selectedIndex, error } = props;

    const isActive = useCallback(
        (index) => {
            return selectedIndex === index || (selectedIndex === -1 && index === 0);
        },
        [selectedIndex],
    );

    const renderInputs = useCallback(() => {
        return values.map((char, index) => {
            return (
                <CharInput
                    key={index}
                    index={char.id}
                    state={char.state}
                    value={char.value}
                    active={isActive(char.id)}
                    errorState={error}
                />
            );
        });
    }, [values, state, selectedIndex, error]);

    return <Container>{renderInputs()}</Container>;
};
