import React, { useEffect } from "react";
import { KeyboardKey } from "../../atoms/keyboardKey";
import { Typography } from "../../atoms/typography";
import { MdBackspace } from "react-icons/md";
import { useGame } from "../../../hooks/useGame";
import Container, { KeyRow } from "./styles";

const FIRST_ROW = "Q W E R T Y U I O P";
const SECOND_ROW = "A S D F G H J K L backspace";
const THIRD_ROW = "Z X C V B N M enter";

export const VirtualKeyboard = () => {
    const { confirmAttempt, setKey, eraseLastCharacter, getKeyState } = useGame();

    useEffect(() => {
        window.addEventListener("keydown", onKeyPress);

        return () => {
            window.removeEventListener("keydown", onKeyPress);
        };
    }, []);

    const onKeyClick = (key) => {
        setKey(key);
    };

    const onBackspaceClick = () => {
        eraseLastCharacter();
    };
    const onEnterClick = () => {
        confirmAttempt();
    };

    const onKeyPress = (key) => {
        const sanitizedKey = key.key.toUpperCase();
        if (sanitizedKey === "BACKSPACE") {
            onBackspaceClick();
        } else if (sanitizedKey === "ENTER") {
            onEnterClick();
        } else if (
            (FIRST_ROW.includes(sanitizedKey) ||
                SECOND_ROW.includes(sanitizedKey) ||
                THIRD_ROW.includes(sanitizedKey)) &&
            getKeyState(key) !== "disabled"
        ) {
            onKeyClick(key.key.toUpperCase());
        }
    };

    const renderKey = (key) => {
        if (key === "backspace") {
            return (
                <KeyboardKey key={key} keyName={key} onClick={onBackspaceClick} state={getKeyState(key)}>
                    {<MdBackspace size='0.7em' />}
                </KeyboardKey>
            );
        }

        return (
            <KeyboardKey
                key={key}
                keyName={key}
                onClick={key === "enter" ? onEnterClick : onKeyClick}
                state={getKeyState(key)}
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
        <Container>
            <KeyRow>{renderFirstRow()}</KeyRow>
            <KeyRow>{renderSecondRow()}</KeyRow>
            <KeyRow>{renderThirdRow()}</KeyRow>
        </Container>
    );
};
