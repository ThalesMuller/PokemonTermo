import styled from "styled-components";

const Container = styled.div`
    position: relative;
    display: flex;
    gap: ${({ theme }) => theme.spacing._3XS};
    align-items: flex-start;
    justify-content: center;

    z-index: 1;

    width: 100%;
`;

export default Container;
