import React from "react";
import { AttemptProvider } from "./contexts/attemptsContext";
import { Layout } from "./components/organisms/layout";

function App() {
    return (
        <AttemptProvider>
            <Layout />
        </AttemptProvider>
    );
}

export default App;
