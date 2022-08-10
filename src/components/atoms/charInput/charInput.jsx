import React, { useCallback, useMemo } from "react";
import { Typography } from "../typography";
import { useTheme } from "styled-components";
import Container from "./styles";

export const CharInput = (props) => {
    const { state, value, index, active, errorState, inline, onClick } = props;

    const theme = useTheme();

    const isDisabled = useCallback(() => {
        return state !== "current";
    }, [state]);

    const handleClick = () => {
        if (isDisabled()) return;

        onClick(index);
    };

    const renderChar = useMemo(() => {
        return (
            <Container
                state={state}
                value={value}
                onClick={handleClick}
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
    }, [state, value, index, active, errorState, inline, theme]);

    return renderChar;
};
