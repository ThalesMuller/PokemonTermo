import styled, { css } from "styled-components";

const h1 = css`
    font-family: ${({ theme }) => theme.fonts.family.highlight.primary};
    font-size: ${({ theme }) => theme.fonts.size.XL};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    line-height: ${({ theme }) => theme.fonts.height.XL};
    color: ${({ theme, fontColor }) =>
        fontColor || theme.colors.grayscale.white};
`;
const h2 = css``;
const h3 = css``;
const h4 = css``;
const h5 = css``;
const h6 = css``;
const subtitle1 = css``;
const subtitle2 = css``;
const body1 = css``;
const body2 = css``;
const button = css``;
const caption = css``;
const overline = css``;
const display = css``;
const code = css``;

const Container = styled.div`
    ${({ variant }) => variant === "h1" && h1};
    ${({ variant }) => variant === "h2" && h2};
    ${({ variant }) => variant === "h3" && h3};
    ${({ variant }) => variant === "h4" && h4};
    ${({ variant }) => variant === "h5" && h5};
    ${({ variant }) => variant === "h6" && h6};
    ${({ variant }) => variant === "subtitle1" && subtitle1};
    ${({ variant }) => variant === "subtitle2" && subtitle2};
    ${({ variant }) => variant === "body1" && body1};
    ${({ variant }) => variant === "body2" && body2};
    ${({ variant }) => variant === "button" && button};
    ${({ variant }) => variant === "caption" && caption};
    ${({ variant }) => variant === "overline" && overline};
    ${({ variant }) => variant === "display" && display};
    ${({ variant }) => variant === "code" && code};
`;

export default Container;
