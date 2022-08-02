import styled from "styled-components";

const Container = styled.div`
    display: grid;
    gap: ${({ theme }) => theme.spacing._3XS};

    flex: 1;
`;

export default Container;
