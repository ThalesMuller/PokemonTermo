import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: space-between;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;

    &:first-child {
        align-self: center;
    }
`;

export const Button = styled.button`
    position: relative;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    padding: ${({ theme }) => theme.spacing._2XS} ${({ theme }) => theme.spacing._3XS};
    line-height: 1;
    font-size: ${({ theme }) => theme.fonts.size._4XS};
    gap: ${({ theme }) => theme.spacing._2XS};

    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.SM};

    cursor: pointer;

    background-color: ${({ theme }) => theme.colors.feedback.info.medium};

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: ${({ theme }) => theme.borderRadius.SM};
        z-index: -1;

        background-color: ${({ theme }) => theme.colors.grayscale.white};
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: opacity 200ms ease-in-out, transform 200ms ease-in-out;
    }
    &:hover::after {
        opacity: 0.4;
        transform: scaleX(1);
    }
`;

export default Container;
