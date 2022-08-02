import React, { useCallback, useState, createRef } from "react";
import { CharInput } from "../../atoms/charInput";
import Container from "./styles";

export const WordInput = (props) => {
    const { size, state } = props;

    const initialValue = useCallback(() => {
        return Array(size)
            .fill({})
            .map((c, index) => {
                return {
                    id: index,
                    value: "",
                    state: state,
                    ref: createRef(),
                };
            });
    }, [size, state]);
    const [value, setValue] = useState(initialValue());

    const allFilled = useCallback(() => {
        return value.every((item) => item.value.length > 0);
    }, [value]);

    const nextInput = (nextIndex) => {
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

        let newValue = [
            ...value.filter((item) => item.id !== index),
            currentItem,
        ];
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
    };

    const renderInputs = useCallback(() => {
        return value.map((char, index) => {
            return (
                <CharInput
                    key={index}
                    index={char.id}
                    handleChange={handleChange}
                    ref={char.ref}
                    state={char.state}
                />
            );
        });
    }, [value]);

    return <Container>{renderInputs()} </Container>;
};
