import styled from "styled-components";

const Container = styled.header`
    display: grid;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    background-color: ${({ theme }) => theme.colors.brand.primary.medium};
    color: ${({ theme }) => theme.colors.grayscale.white};
    padding: ${({ theme }) => theme.spacing._2XS}
        ${({ theme }) => theme.spacing.SM};
`;

export default Container;
