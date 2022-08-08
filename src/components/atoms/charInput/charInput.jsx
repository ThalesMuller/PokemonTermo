import React, { useCallback } from "react";
import { Typography } from "../typography";
import { useTheme } from "styled-components";
import Container from "./styles";
import { useGame } from "../../../hooks/useGame";

export const CharInput = (props) => {
    const { state, value, index, active, errorState, inline } = props;

    const { handleCharClick } = useGame();
    const theme = useTheme();

    const isDisabled = useCallback(() => {
        return state !== "current";
    }, [state]);

    const onClick = () => {
        if (isDisabled()) return;

        handleCharClick(index);
    };
    return (
        <Container
            state={state}
            value={value}
            onClick={onClick}
            disabled={isDisabled()}
            tabIndex={isDisabled() ? -1 : 0}
            data-active={active}
            data-error={errorState}
        >
            <Typography variant={inline ? "displayInline" : "displayChar"} color={theme.colors.grayscale.white}>
                {value}
            </Typography>
        </Container>
    );
};
