import React, { useCallback } from "react";
import Container, { ModalBackground, ModalContent } from "./styles";

export const Modal = (props) => {
    const { children, show, content } = props;

    const renderModal = useCallback(() => {
        if (!show) return <></>;

        return (
            <>
                <ModalBackground />
                <ModalContent>{content && content}</ModalContent>
            </>
        );
    }, [show]);

    return (
        <Container>
            {renderModal()}
            {children}
        </Container>
    );
};
