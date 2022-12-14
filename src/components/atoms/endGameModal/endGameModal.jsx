import React from "react";
import { Typography } from "../typography";
import { IoShareSocialSharp } from "react-icons/io5";
import Container, { Button } from "./styles";

export const EndGameModal = (props) => {
    const { win } = props;

    const copy = (e) => {};

    return (
        <Container>
            <Typography variant='h6'>{win ? "You win!" : "You lose!"}</Typography>

            <Button onClick={copy}>
                Compartilhar <IoShareSocialSharp />
            </Button>
        </Container>
    );
};
