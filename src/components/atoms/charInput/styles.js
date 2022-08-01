import styled, { css } from "styled-components";

const EmptyInput = css``;
const FilledInput = css``;
const DisabledInput = css``;
const ErrorInput = css``;
const WarnInput = css``;
const SuccesInput = css``;

const Container = styled.div`
    padding: ${({ theme }) => theme.spacing._2XS};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.SM};
    background-color: ${({ theme }) => theme.colors.brand.secondary.medium};

    cursor: pointer;

    width: ${({ theme }) => theme.spacing._2XL};
    aspect-ratio: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    ${({ state }) => state === "empty" && EmptyInput};
    ${({ state }) => state === "filled" && FilledInput};
    ${({ state }) => state === "disabled" && DisabledInput};
    ${({ state }) => state === "error" && ErrorInput};
    ${({ state }) => state === "warn" && WarnInput};
    ${({ state }) => state === "succes" && SuccesInput};

    &:hover,
    &:focus,
    &:active {
        scale: 1.1;
    }
`;

export default Container;
