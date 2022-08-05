import styled, { css, keyframes } from "styled-components";

const Blink = keyframes`
    from, to {
        opacity: 0;
    }
    50% {
        opacity: 0.8;
    }
`;

const CurrentInput = css`
    position: relative;

    border: ${({ theme }) =>
        `${theme.borderWidth.MD} solid ${theme.colors.grayscale.dark}`};
    background-color: transparent;
    cursor: pointer;

    transition: transform 200ms ease-in-out;

    &::after {
        content: "";
        background-color: ${({ theme }) => theme.colors.grayscale.dark};
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${({ theme }) => theme.borderWidth.MD};

        transform: scaleX(0);
        transition: transform 150ms 200ms ease;
        transform-origin: bottom center;
    }

    &:hover:not(:active, :focus) {
        transform: scale(1.05);
        background-color: ${({ theme }) => theme.colors.brand.primary.light};
    }

    &:focus,
    &:active {
        cursor: unset;
        background-color: ${({ theme }) => theme.colors.brand.primary.light};
    }

    &:focus,
    &:active {
        box-shadow: ${({ theme }) => theme.shadows.level2};
        &::after {
            transform: scaleX(1);
            animation: ${Blink} 1250ms ease-in-out 190ms infinite;
        }
    }

    &:focus-visible {
        outline: none;
    }
`;

const StandbyFilledInput = css`
    border: ${({ theme }) =>
        `${theme.borderWidth.MD} solid ${theme.colors.brand.primary.dark}`};
    background-color: ${({ theme }) => theme.colors.brand.primary.dark};
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
    padding: ${({ theme }) => theme.spacing._3XS}
        ${({ theme }) => theme.spacing._2XS};
    border-radius: ${({ theme }) => theme.borderRadius.SM};
    background-color: ${({ theme }) => theme.colors.brand.secondary.medium};

    width: ${({ theme }) => theme.spacing.SM};
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
