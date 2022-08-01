import React, { useState, forwardRef } from "react";
import { Typography } from "../typography";
import { useTheme } from "styled-components";
import Container from "./styles";

export const CharInput = forwardRef((props, ref) => {
    const { handleChange, state, index } = props;
    const [currentValue, setCurrentValue] = useState("");
    const theme = useTheme();

    const onChange = (e) => {
        if (state === "error") return;
        const { value } = e.target;

        if (value.length > 1) return;

        setCurrentValue(value);
        handleChange(ref, index);
    };
    const onClick = (e) => {
        if (state === "error" || !currentValue) return;

        ref.current.select();
    };

    console.log(theme);

    return (
        <Container
            ref={ref}
            state={state}
            value={currentValue}
            onChange={onChange}
            onClick={onClick}
            disabled={state === "error"}
        >
            <Typography
                variant='displayChar'
                color={theme.colors.grayscale.white}
            >
                a
            </Typography>
        </Container>
    );
});
