import React, { createContext, useState } from "react";

const DefaultValues = {
    attempts: [],
    setAttempts: () => {},
};

const AttemptsContext = createContext(DefaultValues);

export const AttemptProvider = ({ children }) => {
    const [attempts, setAttempts] = useState([]);

    return <AttemptsContext.Provider value={{ attempts, setAttempts }}>{children}</AttemptsContext.Provider>;
};

AttemptsContext.displayName = "AttemptsContext";

export default AttemptsContext;
