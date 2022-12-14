import React from "react";
import { useTheme } from "styled-components";
import { IoHelpSharp } from "react-icons/io5";
import { Typography } from "../../atoms/typography";
import Container, { IconWrapper } from "./styles";

export const Header = (props) => {
    const { openModal } = props;
    const theme = useTheme();

    return (
        <Container>
            <Typography variant='h1' color={theme.colors.brand.secondary.medium}>
                Pokémon Termo
            </Typography>
            <IconWrapper title='help' onClick={openModal}>
                <IoHelpSharp color={theme.colors.grayscale.white} />
            </IconWrapper>
        </Container>
    );
};
