import styled, { css } from "styled-components";

const CurrentInput = css`
    border: ${({ theme }) =>
        `${theme.borderWidth.MD} solid ${theme.colors.grayscale.dark}`};
    background-color: transparent;
    cursor: pointer;

    transition: transform 200ms ease-in-out;

    &:hover,
    &:focus,
    &:active {
        transform: scale(1.05);
        background-color: ${({ theme }) => theme.colors.brand.primary.light};
    }
`;

const StandbyFilledInput = css`
    border: ${({ theme }) =>
        `${theme.borderWidth.MD} solid ${theme.colors.grayscale.medium}`};
    background-color: ${({ theme }) => theme.colors.grayscale.medium};
`;

const ErrorInput = css`
    border: ${({ theme }) =>
        `${theme.borderWidth.MD} solid ${theme.colors.feedback.error.medium}`};
    background-color: ${({ theme }) => theme.colors.feedback.error.medium};
`;

const WarnInput = css`
    border: ${({ theme }) =>
        `${theme.borderWidth.MD} solid ${theme.colors.feedback.warning.medium}`};
    background-color: ${({ theme }) => theme.colors.feedback.warning.medium};
`;

const SuccessInput = css`
    border: ${({ theme }) =>
        `${theme.borderWidth.MD} solid ${theme.colors.feedback.success.darkest}`};
    background-color: ${({ theme }) => theme.colors.feedback.success.darkest};
`;

const Container = styled.div`
    padding: 0.25rem 0.5rem;
    border-radius: ${({ theme }) => theme.borderRadius.SM};
    background-color: ${({ theme }) => theme.colors.brand.secondary.medium};

    width: 1.5rem;
    aspect-ratio: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: ${({ theme }) => theme.shadows.level1};

    ${({ state }) => state === "current" && CurrentInput};
    ${({ state }) => state === "standby" && StandbyFilledInput};
    ${({ state }) => state === "error" && ErrorInput};
    ${({ state }) => state === "warn" && WarnInput};
    ${({ state }) => state === "success" && SuccessInput};
`;

export default Container;
