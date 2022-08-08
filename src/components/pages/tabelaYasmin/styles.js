import styled from "styled-components";

const Container = styled.div`
    background-color: white;
`;

export const Cell = styled.div`
    background-color: ${({ color }) => color || "white"};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 5px;

    & > * {
        text-align: center;
    }

    outline: 3px solid ${({ theme }) => theme.colors.grayscale.medium};
`;

export const Table = styled.div`
    margin: 1rem 40rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

export default Container;
