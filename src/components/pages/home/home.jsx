import React from "react";
import { AttemptContainer } from "../../organisms/attemptContainer";
import { VirtualKeyboard } from "../../organisms/virtualKeyboard";
import Container from "./styles";

export const Home = () => {
    return (
        <Container>
            <AttemptContainer />
            <VirtualKeyboard />
        </Container>
    );
};
