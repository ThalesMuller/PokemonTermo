import styled, { keyframes } from "styled-components";

const Waving = keyframes`
    from, to {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
    }
    50% {
        transform: translate(-50%, -50%) scale(3);
        opacity: 0.6;
    }
`;

const Container = styled.div`
    position: relative;
    z-index: 1;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.grayscale.white};
    background-color: ${({ theme }) => theme.colors.grayscale.darkest};

    border-radius: ${({ theme }) => theme.borderRadius.SM};
    padding: ${({ theme }) => theme.spacing._3XS}
        ${({ theme }) => theme.spacing._2XS};

    user-select: none;

    cursor: pointer;

    transition: scale 200ms ease-in-out;

    min-width: ${({ theme }) => theme.spacing.SM};
    height: ${({ theme }) => theme.spacing.SM};

    box-shadow: ${({ theme }) => theme.shadows.level1};

    &:hover {
        transform: scale(1.05);
        &::after {
            animation: ${Waving} 2000ms ease-in-out 190ms infinite;
        }
    }

    &:focus-visible {
        outline: none;
    }

    &::after {
        content: "";
        position: absolute;
        z-index: -1;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);

        opacity: ${({ theme }) => theme.opacities.transparent};

        width: ${({ theme }) => theme.spacing.SM};
        height: ${({ theme }) => theme.spacing.SM};

        border-radius: ${({ theme }) => theme.borderRadius.circle};

        background-color: ${({ theme }) => theme.colors.grayscale.dark};
    }
`;

export default Container;
