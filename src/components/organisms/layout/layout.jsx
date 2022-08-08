import React, { useCallback } from "react";
import { Home } from "../../pages/home";
import { Header } from "../header";
import { Modal } from "../../molecules/modal";
import { HowToPlayModal } from "../../atoms/howToPlayModal";
import { EndGameModal } from "../../atoms/endGameModal";
import Container from "./styles";

export const Layout = () => {
    const [showModal, setShowModal] = React.useState(false);

    const modalContent = useCallback(() => {
        return <EndGameModal win={true} />;

        // return <HowToPlayModal />
    }, []);

    return (
        <Modal show={showModal} handleClose={() => setShowModal(false)} content={modalContent()}>
            <Container>
                <Header openModal={() => setShowModal(true)} />
                <Home />
            </Container>
        </Modal>
    );
};
