import styled from "styled-components";

const Container = styled.div`
    display: grid;

    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.brand.primary.lightest};
    color: ${({ theme }) => theme.colors.grayscale.white};
    padding: ${({ theme }) => theme.spacing.XS}
        ${({ theme }) => theme.spacing.LG};
`;

export default Container;
