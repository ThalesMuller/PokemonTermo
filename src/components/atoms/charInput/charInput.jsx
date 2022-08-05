import React, { useState, forwardRef, useCallback } from "react";
import { Typography } from "../typography";
import { useTheme } from "styled-components";
import Container from "./styles";

export const CharInput = forwardRef((props, ref) => {
    const { handleChange, state, index } = props;
    const [currentValue, setCurrentValue] = useState("");
    const theme = useTheme();

    const isDisabled = useCallback(() => {
        return state !== "current";
    }, [state]);

    const onChange = (e) => {
        if (isDisabled()) return;
        const { value } = e.target;

        if (value.length > 1) return;

        setCurrentValue(value);
        handleChange(ref, index);
    };
    const onClick = (e) => {
        if (isDisabled() || !currentValue) return;

        ref.current.select();
    };

    return (
        <Container
            ref={ref}
            state={state}
            value={currentValue}
            onChange={onChange}
            onClick={onClick}
            disabled={isDisabled()}
            tabIndex={isDisabled() ? -1 : 0}
        >
            <Typography variant='displayChar' color={theme.colors.grayscale.white}>
                {currentValue}
            </Typography>
        </Container>
    );
});
