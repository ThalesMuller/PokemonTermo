import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: ${({ theme }) => theme.spacing._3XS};

    margin-bottom: auto;
    margin-top: ${({ theme }) => theme.spacing._3XS};
`;
export const KeyRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: ${({ theme }) => theme.spacing._3XS};
`;

export default Container;
