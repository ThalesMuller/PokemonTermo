import styled from "styled-components";

const Container = styled.div`
    & .breakline {
        display: inline-block;
    }
`;

export const WordWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    margin-block: 10px;

    gap: ${({ theme }) => theme.spacing._4XS};
`;

export const CharWrapper = styled.div`
    display: inline-block;
    margin-inline: 5px;

    & > * {
        width: 0.5rem;
    }
`;

export default Container;
