import React from "react";
import Container from "./styles";

export const KeyboardKey = (props) => {
    const { disabled, onClick, children, keyName } = props;

    const handleClick = () => {
        if (!disabled) {
            onClick(keyName);
        }
    };

    return (
        <Container tabIndex={-1} disabled={disabled} onClick={handleClick}>
            {children}
        </Container>
    );
};
