import React from "react";
import { AttemptProvider } from "./contexts/attemptsContext";
import { TabelaYasmin } from "./components/pages/tabelaYasmin";
import { Layout } from "./components/organisms/layout";

function App() {
    return (
        <AttemptProvider>
            {/* <Layout /> */}
            <TabelaYasmin />
        </AttemptProvider>
    );
}

export default App;
