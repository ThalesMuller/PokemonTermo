import React, { useCallback, useContext, useEffect, useMemo, useState, createRef } from "react";
import ModalContext from "../../../contexts/modalContext";
import { HowToPlayModal } from "../../../components/molecules/howToPlayModal";
import { EndGameModal } from "../../../components/molecules/endGameModal";
import Container, { ModalBackground, ModalContent } from "./styles";
import { useModal } from "../../../hooks/useModal";

export const Modal = (props) => {
    const { children } = props;

    console.log("Modal.jsx");

    const { closeModal } = useModal();
    const { modal, setModal } = useContext(ModalContext);
    const { isOpen, modalName, modalParams } = modal;

    const modalBgRef = createRef(null);
    const modalContentRef = createRef(null);

    const setModalAnimationClose = () => {
        modalBgRef.current.setAttribute("data-closing", true);
        modalContentRef.current.setAttribute("data-closing", true);

        console.log("closing");
        modalContentRef.current.addEventListener("animationend", () => {
            console.log("animationend");
            modalBgRef.current.setAttribute("data-closing", false);
            modalContentRef.current.setAttribute("data-closing", false);
            modalContentRef.current.removeEventListener("animationend", setModalAnimationClose);
            setModal({
                isOpen: false,
                modalName: "",
                modalParams: {},
                onClose: () => {},
            });
        });
    };

    const MODAL_LIST = {
        howToPlay: useMemo(() => <HowToPlayModal {...modalParams} />, [modalParams]),
        endGame: useMemo(() => <EndGameModal {...modalParams} />, [modalParams]),
    };

    const getCurrentModal = useCallback(() => {
        return MODAL_LIST[modalName];
    }, [modalName]);

    const renderModal = useCallback(() => {
        if (!isOpen || !modalName || !getCurrentModal()) return <></>;

        return (
            <>
                <ModalBackground ref={modalBgRef} onClick={() => setModalAnimationClose()} />
                <ModalContent ref={modalContentRef}>{MODAL_LIST[modalName]}</ModalContent>
            </>
        );
    }, [isOpen, modalBgRef, modalContentRef, modalName]);

    return (
        <Container>
            {renderModal()}
            {children}
        </Container>
    );
};
