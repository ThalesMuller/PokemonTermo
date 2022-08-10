import React, { useContext } from "react";
import ModalContext from "../../contexts/modalContext";

export const useModal = () => {
    const { modal, setModal } = useContext(ModalContext);

    const openModal = (modalName, modalParams, onClose) => {
        setModal({
            isOpen: true,
            modalName,
            modalParams,
            onClose: onClose || (() => {}),
        });
    };

    const closeModal = () => {
        modal.onClose && modal.onClose();

        setModal({
            isOpen: false,
        });
    };

    return { openModal, closeModal };
};
