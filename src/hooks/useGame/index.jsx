import React, { useCallback, useEffect, useContext, createRef } from "react";
import AttemptsContext from "../../contexts/attemptsContext";
import { usePokemon } from "../usePokemon";

export const MAX_ATTEMPTS = 6;

export const useGame = () => {
    const { attempts, setAttempts } = useContext(AttemptsContext);
    const { pokemons, todayPokemon } = usePokemon();
    const wordSize = 6;

    useEffect(() => {
        startGame();
    }, []);

    const isAttemptCompleted = (attempt, checkCurrent) => {
        if ((checkCurrent && attempt.state === "current") || attempt.state === "empty" || !attempt.values.length)
            return false;

        return true;
    };

    const isGameOver = useCallback(() => {
        if (!attempts.length) return false;

        return attempts.every((attempt) => isAttemptCompleted(attempt));
    }, [attempts]);

    const initAttempts = () => {
        const newAttempts = Array(MAX_ATTEMPTS).fill({});
        setAttempts(
            newAttempts.map((c, index) => {
                return {
                    id: index,
                    values: Array(wordSize)
                        .fill("")
                        .map((value, i) => {
                            return {
                                id: i,
                                ref: createRef(null),
                                state: index === 0 ? "current" : "standby",
                                value: "",
                            };
                        }),
                    state: index === 0 ? "current" : "standby",
                    selectedIndex: -1,
                };
            }),
        );
    };

    const confirmAttempt = () => {
        const currentAttempt = attempts.find((attempt) => attempt.state === "current");
        if (!currentAttempt || !isAttemptCompleted(currentAttempt)) return;

        verifyAttempt();
    };

    const eraseLastCharacter = () => {
        const currentAttempt = attempts.find((attempt) => attempt.state === "current");
        if (!currentAttempt) return;

        if (currentAttempt.values.every((value) => !value.value)) return;

        let lastChar = currentAttempt.selectedIndex - 1;

        if (lastChar < 0 || currentAttempt.values[lastChar].value === "") {
            const filledChars = currentAttempt.values.filter((char) => char.value !== "");
            lastChar = filledChars.length - 1;
        }
        if (lastChar === undefined) return;
        if (currentAttempt.values[lastChar].state === "empty") return;
        if (currentAttempt.values[lastChar].state === "completed") return;
        if (!currentAttempt.values[lastChar].value) return;

        const newValues = [...currentAttempt.values];
        newValues[lastChar].value = "";

        const newAttempt = { ...currentAttempt, selectedIndex: -1, values: newValues };
        const newAttempts = [...attempts];
        newAttempts[currentAttempt.id] = newAttempt;

        setAttempts(newAttempts);
    };

    const setKey = (key) => {
        const currentAttempt = attempts.find((attempt) => attempt.state === "current");
        if (!currentAttempt || currentAttempt.selectedIndex === -2) return;

        const currentValueIndex = currentAttempt.selectedIndex === -1 ? 0 : currentAttempt.selectedIndex;

        let newValues = [...currentAttempt.values];
        newValues[currentValueIndex] = {
            ...newValues[currentValueIndex],
            value: key,
            state: "current",
        };

        let newAttempts = [...attempts];
        newAttempts[currentAttempt.id] = {
            ...currentAttempt,
            values: newValues,
            selectedIndex: currentValueIndex + 1 <= wordSize - 1 ? currentValueIndex + 1 : -2,
        };

        setAttempts(newAttempts);
    };

    const setCurrentAttempt = (index) => {
        const newAttempts = [...attempts];
        newAttempts[index].state = "current";
        newAttempts[index].selectedIndex = 0;
        newAttempts[index].values = newAttempts[index].values.map((value) => {
            return {
                ...value,
                state: "current",
            };
        });

        setAttempts(newAttempts);
    };

    const verifyAttempt = () => {
        const currentAttempt = attempts.find((attempt) => attempt.state === "current");
        const currentWord = currentAttempt.values
            .map((value) => value.value)
            .join("")
            .toLowerCase();

        if (!pokemons.includes(currentWord)) return;

        let win;
        if (currentWord === todayPokemon) {
            win = true;
        } else if (currentAttempt.id === MAX_ATTEMPTS - 1) {
            win = false;
        }

        const validadeValueState = (value, index) => {
            if (todayPokemon.includes(value)) {
                if (value === todayPokemon[index]) return "success";

                return "warn";
            }

            return "error";
        };

        let newValues = [...currentAttempt.values];
        newValues = newValues.map((value, index) => {
            return {
                ...value,
                state: validadeValueState(value.value.toLowerCase(), index),
            };
        });

        let newAttempts = [...attempts];
        newAttempts[currentAttempt.id] = {
            ...currentAttempt,
            values: newValues,
            state: "completed",
        };

        if (win === undefined) {
            newAttempts[currentAttempt.id + 1] = {
                ...newAttempts[currentAttempt.id + 1],
                state: "current",
                values: newAttempts[currentAttempt.id + 1].values.map((value) => {
                    return {
                        ...value,
                        state: "current",
                    };
                }),
            };
        } else endGame(win);

        setAttempts(newAttempts);
    };

    const startGame = () => {
        initAttempts();
    };
    const endGame = (win) => {
        console.log("endGame", win ? "win" : "lose");
    };

    const handleCharClick = (index) => {
        const currentAttempt = attempts.find((attempt) => attempt.state === "current");
        if (!currentAttempt) return;

        const newAttempts = [...attempts];
        newAttempts[currentAttempt.id].selectedIndex = index;

        setAttempts(newAttempts);
    };

    return { confirmAttempt, setKey, eraseLastCharacter, handleCharClick };
};
