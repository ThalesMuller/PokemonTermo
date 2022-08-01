import React from "react";
import { useTheme } from "styled-components";
import { Typography } from "../../atoms/typography";
import Container from "./styles";

export const Header = () => {
    const theme = useTheme();

    return (
        <Container>
            <Typography
                variant='h1'
                color={theme.colors.brand.secondary.medium}
            >
                Pokémon Termo
            </Typography>
        </Container>
    );
};
