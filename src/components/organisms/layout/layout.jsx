import React from "react";
import { Home } from "../../pages/home";
import { Header } from "../header";
import Container from "./styles";

export const Layout = () => {
    return (
        <Container>
            <Header />
            <Home />
        </Container>
    );
};
