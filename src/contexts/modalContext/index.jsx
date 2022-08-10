import React, { createContext, useState } from "react";

const DefaultValues = {
    modal: {
        isOpen: false,
        modalName: "",
        modalParams: {},
        onClose: () => {},
    },
    setModal: () => {},
};

const ModalContext = createContext(DefaultValues);

export const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState(DefaultValues.modal);

    return <ModalContext.Provider value={{ modal, setModal }}>{children}</ModalContext.Provider>;
};

ModalContext.displayName = "ModalContext";

export default ModalContext;
