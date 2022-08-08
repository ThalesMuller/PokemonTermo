import React, { useCallback, useEffect, useContext, useState } from "react";
import AttemptsContext from "../../contexts/attemptsContext";
import { usePokemon } from "../usePokemon";

export const MAX_ATTEMPTS = 6;

export const useGame = () => {
    const { attempts, setAttempts } = useContext(AttemptsContext);
    const { pokemons, todayPokemon } = usePokemon();
    const [win, setWin] = useState(undefined);

    useEffect(() => {
        if (!todayPokemon) return;
        startGame();
    }, [todayPokemon]);

    useEffect(() => {
        if (shouldUnlockNextAttempt()) {
            unlockNextAttempt();
        }
    }, [attempts]);

    useEffect(() => {
        if (win === undefined) return;
        endGame(win);
    }, [win]);

    const isAttemptCompleted = (attempt, checkCurrent) => {
        if ((checkCurrent && attempt.state === "current") || attempt.state === "empty" || !attempt.values.length)
            return false;

        return true;
    };

    const initAttempts = () => {
        const newAttempts = Array(MAX_ATTEMPTS).fill({});
        setAttempts(
            newAttempts.map((c, index) => {
                return {
                    id: index,
                    values: Array(todayPokemon.length)
                        .fill("")
                        .map((value, i) => {
                            return {
                                id: i,
                                state: index === 0 ? "current" : "standby",
                                value: "",
                            };
                        }),
                    state: index === 0 ? "current" : "standby",
                    selectedIndex: -1,
                    error: false,
                };
            }),
        );
    };

    const confirmAttempt = () => {
        const currentAttempt = attempts.find((attempt) => attempt.state === "current");
        if (!currentAttempt || !isAttemptCompleted(currentAttempt)) return;

        verifyAttempt();
    };

    const getCurrentAttempt = useCallback(() => {
        return attempts.find((attempt) => attempt.state === "current");
    }, [attempts]);

    const setAttempt = (attempt, params) => {
        const newAttempts = [...attempts];
        newAttempts[attempt.id] = { ...attempt, ...params };
        setAttempts(newAttempts);
    };

    const eraseLastCharacter = () => {
        const currentAttempt = getCurrentAttempt();
        if (!currentAttempt) return;

        if (currentAttempt.values.every((value) => !value.value)) return;

        let lastChar = currentAttempt.selectedIndex;

        if (lastChar < 0 || currentAttempt.values[lastChar].value === "") {
            const filledChars = currentAttempt.values.filter((char) => char.value !== "");
            lastChar = filledChars.length - 1;
        }
        if (lastChar === undefined) return;
        if (currentAttempt.values[lastChar].state === "empty") return;
        if (!currentAttempt.values[lastChar].value) return;

        const newValues = [...currentAttempt.values];
        newValues[lastChar].value = "";

        setAttempt(currentAttempt, {
            values: newValues,
            selectedIndex: lastChar,
        });
    };

    const setKey = (key) => {
        const currentAttempt = getCurrentAttempt();
        if (!currentAttempt || currentAttempt.selectedIndex === -2) return;

        const currentValueIndex = currentAttempt.selectedIndex === -1 ? 0 : currentAttempt.selectedIndex;

        let newValues = [...currentAttempt.values];
        newValues[currentValueIndex] = {
            ...newValues[currentValueIndex],
            value: key,
        };

        const nextValueIndex = currentValueIndex + 1;

        setAttempt(currentAttempt, {
            selectedIndex: nextValueIndex < todayPokemon.length ? nextValueIndex : -2,
            values: newValues,
        });
    };

    const validadeValueState = (value, index) => {
        if (todayPokemon.includes(value)) {
            if (value === todayPokemon[index]) return "success";

            return "warn";
        }

        return "error";
    };

    const setAttemptError = (currentAttempt) => {
        setAttempt(currentAttempt, { error: true });

        setTimeout(() => {
            setAttempt(currentAttempt, { error: false });
        }, 1000);
    };

    const verifyAttempt = () => {
        const currentAttempt = getCurrentAttempt();
        const currentWord = currentAttempt.values
            .map((value) => value.value)
            .join("")
            .toLowerCase();

        if (!pokemons.includes(currentWord)) {
            setAttemptError(currentAttempt);
            return;
        }

        if (currentWord === todayPokemon) {
            setWin(true);
        } else if (currentAttempt.id === MAX_ATTEMPTS - 1) {
            setWin(false);
        }

        let newValues = [...currentAttempt.values];
        newValues = newValues.map((value, index) => {
            return {
                ...value,
                state: validadeValueState(value.value.toLowerCase(), index),
            };
        });

        setAttempt(currentAttempt, {
            state: "completed",
            values: newValues,
        });
    };

    const shouldUnlockNextAttempt = useCallback(() => {
        const lastAttemptIsCompleted = attempts.find((attempt) => attempt.state === "completed");
        const noCurrentAttempt = !attempts.find((attempt) => attempt.state === "current");

        return lastAttemptIsCompleted && noCurrentAttempt && win === undefined;
    }, [attempts, win]);

    const unlockNextAttempt = () => {
        const nextAttempt = attempts.find((attempt) => attempt.state === "standby");
        if (!nextAttempt) return;

        const nextAtemptObj = {
            state: "current",
            values: nextAttempt.values.map((value) => {
                return { ...value, value: "", state: "current" };
            }),
            selectedIndex: -1,
        };
        setAttempt(nextAttempt, nextAtemptObj);
    };

    const startGame = () => {
        initAttempts();
    };
    const endGame = (win) => {
        console.log("endGame", win ? "win" : "lose");
    };

    const handleCharClick = (index) => {
        const currentAttempt = getCurrentAttempt();
        if (!currentAttempt) return;

        console.log("handleCharClick", index, currentAttempt.selectedIndex);

        setAttempt(currentAttempt, { selectedIndex: currentAttempt.selectedIndex === index ? -2 : index });
    };

    const getKeyState = (key) => {
        const passedAttempts = attempts.filter((attempt) => attempt.state === "completed");

        if (passedAttempts.length === MAX_ATTEMPTS) return "disabled";
        if (passedAttempts.length === 0) return "default";
        if (
            passedAttempts.find((attempt) =>
                attempt.values.find((value) => value.value === key && value.state === "error"),
            )
        )
            return "disabled";

        return "default";
    };

    return { confirmAttempt, setKey, eraseLastCharacter, handleCharClick, getKeyState, todayPokemon };
};
