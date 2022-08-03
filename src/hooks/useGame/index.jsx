import React, { useEffect, useState } from "react";

export const MAX_ATTEMPTS = 6;

export const useGame = () => {
    const [attempts, setAttempts] = useState([]);

    useEffect(() => {
        if (attempts.length === MAX_ATTEMPTS) {
            endGame();
        }
    }, [attempts]);

    useEffect(() => {
        startGame();
    }, []);

    const initAttempts = () => {
        const newAttempts = Array(MAX_ATTEMPTS).fill({});
        setAttempts(
            newAttempts.map((c, index) => {
                return {
                    id: index,
                    values: [],
                    state: index === 0 ? "current" : "standby",
                };
            }),
        );
    };

    const startGame = () => {
        initAttempts();
    };
    const endGame = () => {
        console.log("end game");
    };

    return { startGame, endGame, attempts };
};
