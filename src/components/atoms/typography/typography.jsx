import React from "react";
import Container from "./styles";

const MAPPED_VARIANTS = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "span",
    subtitle2: "span",
    body1: "p",
    body2: "p",
    button: "span",
    caption: "span",
    overline: "span",
    display: "span",
    code: "code",
    displayChar: "span",
    displayKey: "span",
    tableCell: "span",
};

export const Typography = (props) => {
    const { children, variant, color } = props;

    return (
        <Container
            as={MAPPED_VARIANTS[variant]}
            variant={variant}
            fontColor={color}
            data-testid={`typography_${variant}`}
        >
            {children}
        </Container>
    );
};
