import React from "react";
import { Home } from "../../pages/home";
import { Header } from "../header";
import { Modal } from "../modal";
import Container from "./styles";

export const Layout = () => {
    return (
        <Modal>
            <Container>
                <Header />
                <Home />
            </Container>
        </Modal>
    );
};
