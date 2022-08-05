import React, { useCallback } from "react";
import { CharInput } from "../../atoms/charInput";
import Container from "./styles";

export const WordInput = (props) => {
    const { state, values, selectedIndex } = props;

    /* const nextInput = (nextIndex) => {
        const nextItem = value[nextIndex];

        if (nextItem) {
            nextItem.ref.current.focus();
        }
    };

    const lastInput = (lastIndex) => {
        const lastItem = value[lastIndex];

        if (lastItem) {
            lastItem.ref.current.focus();
        }
    };

    const handleChange = (ref, index) => {
        const refValue = ref.current.value;

        const currentItem = {
            id: index,
            ref: ref,
            state: value[index].state,
            value: refValue,
        };

        let newValue = [...value.filter((item) => item.id !== index), currentItem];
        newValue.sort((a, b) => a.id - b.id);

        setValue(newValue);

        if (refValue.length > 0) {
            if (allFilled()) {
                ref.current.blur();
                return;
            }
            nextInput(index + 1);
            return;
        }

        lastInput(index - 1);
    }; */

    const isActive = useCallback(
        (index) => {
            return selectedIndex === index || (selectedIndex === -1 && index === 0);
        },
        [selectedIndex],
    );

    const renderInputs = useCallback(() => {
        return values.map((char, index) => {
            return (
                <CharInput
                    key={index}
                    index={char.id}
                    state={char.state}
                    value={char.value}
                    active={isActive(char.id)}
                />
            );
        });
    }, [values, state, selectedIndex]);

    return <Container>{renderInputs()}</Container>;
};
