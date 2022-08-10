import React from "react";
import { AttemptProvider } from "./contexts/attemptsContext";
import { Layout } from "./components/organisms/layout";
import { ModalProvider } from "./contexts/modalContext";

function App() {
    return (
        <ModalProvider>
            <AttemptProvider>
                <Layout />
            </AttemptProvider>
        </ModalProvider>
    );
}

export default App;
