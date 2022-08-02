import React, { useState } from "react";

export const useGame = () => {
    const [todayPokemon, setTodayPokemon] = useState("Squirtle");

    const startGame = () => {
        console.log("start game");
    };
    const endGame = () => {
        console.log("end game");
    };

    return { startGame, endGame, todayPokemon };
};
