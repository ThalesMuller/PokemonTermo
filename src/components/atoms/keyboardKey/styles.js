import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.grayscale.white};
    background-color: ${({ theme }) => theme.colors.grayscale.darkest};

    border-radius: ${({ theme }) => theme.borderRadius.SM};
    padding: 0.25rem 0.5rem;

    cursor: pointer;

    transition: scale 200ms ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.colors.grayscale.dark};
        transform: scale(1.05);
    }
`;

export default Container;
