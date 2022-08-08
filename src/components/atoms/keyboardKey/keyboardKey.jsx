import React from "react";
import Container from "./styles";

export const KeyboardKey = (props) => {
    const { state, onClick, children, keyName } = props;

    const handleClick = () => {
        if (state !== "disabled") {
            onClick(keyName);
        }
    };

    return (
        <Container tabIndex={-1} data-state={state} onClick={handleClick}>
            {children}
        </Container>
    );
};
