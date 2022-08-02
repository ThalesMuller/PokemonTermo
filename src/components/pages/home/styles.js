import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.SM};

    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.brand.primary.lightest};
    padding: ${({ theme }) => theme.spacing.XS};
`;

export default Container;
