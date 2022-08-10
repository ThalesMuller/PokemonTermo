import styled, { keyframes } from "styled-components";

const Container = styled.div`
    position: relative;
    z-index: 0;
    height: 100%;
    overflow: hidden;
`;

const showing = keyframes`
    from {
        opacity: 0;
        transform: translate(-50%, 50%);
    }
    to {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
`;
const hiding = keyframes`
    from {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
    to {
        opacity: 0;
        transform: translate(-50%, 50%);
    }
`;

const showingBg = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 0.4;
    }
`;
const hidingBg = keyframes`
    from {
        opacity: 0.4;
    }
    to {
        opacity: 0;
    }
`;

export const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    background-color: ${({ theme }) => theme.colors.grayscale.darkest};
    border-radius: ${({ theme }) => theme.borderRadius.SM};
    transform: translate(-50%, 50%);
    opacity: 0;

    width: 40vw;
    height: auto;
    max-height: 90vh;

    padding: ${({ theme }) => theme.spacing._2XS} ${({ theme }) => theme.spacing.XS};

    overflow-y: auto;

    animation: ${showing} 300ms ease-in-out forwards;

    &[data-closing="true"] {
        animation: ${hiding} 300ms ease-in-out forwards;
    }
`;

export const ModalBackground = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.grayscale.medium};
    opacity: 0;

    cursor: pointer;

    animation: ${showingBg} 150ms ease-in-out 300ms forwards;

    &[data-closing="true"] {
        animation: ${hidingBg} 300ms ease-in-out forwards;
    }
`;

export default Container;
