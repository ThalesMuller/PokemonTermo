import React, { useMemo } from "react";
import Container from "./styles";

export const KeyboardKey = (props) => {
    const { state, onClick, children, keyName } = props;

    const handleClick = () => {
        if (state !== "disabled") {
            onClick(keyName);
        }
    };

    const renderKey = useMemo(() => {
        return (
            <Container tabIndex={-1} data-state={state} onClick={handleClick}>
                {children}
            </Container>
        );
    }, [state, children, keyName]);

    return renderKey;
};
