import styled, { keyframes } from "styled-components";

const Waving = keyframes`
    from, to {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
    }
    50% {
        transform: translate(-50%, -50%) scale(2);
        opacity: 0.5;
    }
`;

const Container = styled.header`
    position: relative;
    display: grid;
    justify-content: space-between;
    align-items: center;

    grid-auto-flow: column;

    width: 100%;
    background-color: ${({ theme }) => theme.colors.brand.primary.medium};
    color: ${({ theme }) => theme.colors.grayscale.white};
    padding: ${({ theme }) => theme.spacing._2XS} ${({ theme }) => theme.spacing.SM};

    box-shadow: ${({ theme }) => theme.shadows.level1};
    z-index: 2;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: ${({ theme }) => theme.borderRadius.SM};
    background-color: ${({ theme }) => theme.colors.grayscale.darkest};

    cursor: pointer;

    padding: 2px 3px;
    margin-top: auto;

    overflow: hidden;

    &:hover {
        transform: scale(1.05);
        &::after {
            animation: ${Waving} 2000ms ease-in-out infinite;
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
        border: ${({ theme }) => `${theme.borderWidth.SM} solid ${theme.colors.grayscale.white}`};

        background-color: ${({ theme }) => theme.colors.grayscale.dark};
    }
`;

export default Container;
