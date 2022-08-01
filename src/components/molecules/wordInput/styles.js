import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing._2XS};
    align-items: flex-start;
    justify-content: center;

    width: 100%;
`;

export default Container;
