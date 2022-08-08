import styled, { css } from "styled-components";

const h1 = css`
    font-family: ${({ theme }) => theme.fonts.family.highlight};
    font-size: ${({ theme }) => theme.fonts.size.LG};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    line-height: ${({ theme }) => theme.fonts.height.MD};
    text-shadow: 5px 5px 3px ${({ theme }) => theme.colors.support.blue};
`;
const h2 = css`
    font-family: ${({ theme }) => theme.fonts.family.highlight};
    font-size: ${({ theme }) => theme.fonts.size.LG};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    line-height: ${({ theme }) => theme.fonts.height.LG};
`;
const h3 = css`
    font-family: ${({ theme }) => theme.fonts.family.highlight};
    font-size: ${({ theme }) => theme.fonts.size.MD};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    line-height: ${({ theme }) => theme.fonts.height.MD};
`;

const h4 = css``;
const h5 = css`
    font-family: ${({ theme }) => theme.fonts.family.highlight};
    font-size: ${({ theme }) => theme.fonts.size.XS};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    line-height: ${({ theme }) => theme.fonts.height.MD};
    margin: 0;
`;

const h6 = css``;
const subtitle1 = css``;
const subtitle2 = css``;
const body1 = css`
    font-family: ${({ theme }) => theme.fonts.family.base};
    font-size: ${({ theme }) => theme.fonts.size.MD};
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
    line-height: ${({ theme }) => theme.fonts.height.MD};

    max-width: 45ch;
`;
const body2 = css`
    font-family: ${({ theme }) => theme.fonts.family.base};
    font-size: ${({ theme }) => theme.fonts.size.SM};
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
    line-height: ${({ theme }) => theme.fonts.height.MD};

    max-width: 45ch;
`;
const button = css``;
const caption = css``;
const overline = css``;
const display = css``;
const code = css``;
const displayChar = css`
    font-family: ${({ theme }) => theme.fonts.family.highlight};
    font-size: ${({ theme }) => theme.fonts.size._4XS};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    line-height: ${({ theme }) => theme.fonts.height.LG};

    text-align: center;
    text-transform: uppercase;
`;
const displayKey = css`
    font-family: ${({ theme }) => theme.fonts.family.highlight};
    font-size: ${({ theme }) => theme.fonts.size._3XS};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    line-height: ${({ theme }) => theme.fonts.height.LG};

    text-align: center;
    text-transform: uppercase;
`;

const tableCell = css`
    font-family: ${({ theme }) => theme.fonts.family.base};
    font-size: ${({ theme }) => theme.fonts.size._2XS};
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
    line-height: ${({ theme }) => theme.fonts.height.MD};
`;

const Container = styled.div`
    color: ${({ theme, fontColor }) => fontColor || theme.colors.grayscale.white};

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
    ${({ variant }) => variant === "displayChar" && displayChar};
    ${({ variant }) => variant === "displayKey" && displayKey};
    ${({ variant }) => variant === "tableCell" && tableCell};
`;

export default Container;
