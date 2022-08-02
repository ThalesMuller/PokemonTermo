import React, { useEffect, useRef } from "react";
import { KeyboardKey } from "../../atoms/keyboardKey";
import { Typography } from "../../atoms/typography";
import { MdBackspace } from "react-icons/md";
import Container, { KeyRow } from "./styles";

const FIRST_ROW = "Q W E R T Y U I O P";
const SECOND_ROW = "A S D F G H J K L backspace";
const THIRD_ROW = "Z X C V B N M enter";

export const VirtualKeyboard = () => {
    const keyBoardRef = useRef();

    const onKeyClick = (key) => {
        console.log(key);
    };
    const onBackspaceClick = () => {
        console.log("backspace");
    };
    const onEnterClick = () => {
        console.log("enter");
    };

    const isDisabled = (key) => {
        return false;
    };

    const addEventListener = (key) => {
        // console.log("add", key);
        if (key === "backspace") {
            window.addEventListener("backspace", onBackspaceClick);
        } else if (key === "enter") {
            window.addEventListener("enter", onEnterClick);
        } else {
            window.addEventListener(key, () => onKeyClick(key));
        }
    };

    const removeEventListener = (key) => {
        // console.log("remove", key);
        if (key === "backspace") {
            window.removeEventListener("backspace", onBackspaceClick);
        } else if (key === "enter") {
            window.removeEventListener("enter", onEnterClick);
        } else {
            window.removeEventListener(key, () => onKeyClick(key));
        }
    };

    const addListeners = () => {
        FIRST_ROW.split(" ").forEach((key) => addEventListener(key));
        SECOND_ROW.split(" ").forEach((key) => addEventListener(key));
        THIRD_ROW.split(" ").forEach((key) => addEventListener(key));
    };

    const removeListeners = () => {
        FIRST_ROW.split(" ").forEach((key) => removeEventListener(key));
        SECOND_ROW.split(" ").forEach((key) => removeEventListener(key));
        THIRD_ROW.split(" ").forEach((key) => removeEventListener(key));
    };

    useEffect(() => {
        addListeners();

        return () => {
            removeListeners();
        };
    });

    const renderKey = (key) => {
        if (key === "backspace") {
            return (
                <KeyboardKey
                    key={key}
                    keyName={key}
                    onClick={onBackspaceClick}
                    disabled={isDisabled(key)}
                >
                    {<MdBackspace size='0.9rem' />}
                </KeyboardKey>
            );
        }

        return (
            <KeyboardKey
                key={key}
                keyName={key}
                onClick={key === "enter" ? onEnterClick : onKeyClick}
                disabled={isDisabled(key)}
            >
                <Typography variant='displayKey'>{key}</Typography>
            </KeyboardKey>
        );
    };

    const renderFirstRow = () => {
        return FIRST_ROW.split(" ").map(renderKey);
    };

    const renderSecondRow = () => {
        return SECOND_ROW.split(" ").map(renderKey);
    };

    const renderThirdRow = () => {
        return THIRD_ROW.split(" ").map(renderKey);
    };

    return (
        <Container ref={keyBoardRef}>
            <KeyRow>{renderFirstRow()}</KeyRow>
            <KeyRow>{renderSecondRow()}</KeyRow>
            <KeyRow>{renderThirdRow()}</KeyRow>
        </Container>
    );
};
