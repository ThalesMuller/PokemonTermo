import styled from "styled-components";

const Container = styled.header`
    position: relative;
    display: grid;
    justify-content: space-between;
    align-items: center;

    grid-auto-flow: column;

    width: 100%;
    background-color: ${({ theme }) => theme.colors.brand.primary.medium};
    color: ${({ theme }) => theme.colors.grayscale.white};
    padding: ${({ theme }) => theme.spacing._2XS} ${({ theme }) => theme.spacing.SM};

    box-shadow: ${({ theme }) => theme.shadows.level1};
    z-index: 2;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: ${({ theme }) => theme.borderRadius.SM};
    background-color: ${({ theme }) => theme.colors.feedback.error.medium};

    cursor: pointer;

    padding: 2px 3px;
    margin-top: auto;

    &:hover {
        background-color: ${({ theme }) => theme.colors.brand.primary.light};
    }
`;

export default Container;
