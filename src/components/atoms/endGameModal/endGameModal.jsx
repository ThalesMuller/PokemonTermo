import React from "react";
import { Typography } from "../typography";
import Container from "./styles";

export const EndGameModal = (props) => {
    const { win } = props;
    return (
        <Container>
            <Typography variant='h6'>{win ? "You win!" : "You lose!"}</Typography>
        </Container>
    );
};
