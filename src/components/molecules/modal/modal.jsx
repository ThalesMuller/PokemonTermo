import React, { useCallback } from "react";
import Container, { ModalBackground, ModalContent } from "./styles";

export const Modal = (props) => {
    const { children, show, content, handleClose } = props;

    const renderModal = useCallback(() => {
        if (!show) return <></>;

        return (
            <>
                <ModalBackground onClick={handleClose} />
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
