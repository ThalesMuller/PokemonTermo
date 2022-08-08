import defaultColorScheme from "./defaultColorScheme";

const defaultSpacings = {
    _4XS: "0.1rem",
    _3XS: "0.25rem",
    _2XS: "0.5rem",
    XS: "1rem",
    SM: "1.5rem",
    MD: "2rem",
    LG: "2.5rem",
    XL: "3rem",
    _2XL: "3.25rem",
    _3XL: "3.5rem",
};

const defaultOpacity = {
    semiOpaque: "0.8",
    intense: "0.64",
    medium: "0.32",
    weak: "0.24",
    light: "0.16",
    semiTransparent: "0.08",
    transparent: "0",
};

const defaultShadows = {
    level1: "0px 4px 16px rgba(0, 0, 0, 0.15)",
    level2: "0px 8px 24px rgba(0, 0, 0, 0.15)",
    level3: "0px 16px 32px rgba(0, 0, 0, 0.08)",
    level4: "0px 16px 48px rgba(0, 0, 0, 0.08)",
};

const defaultBorderRadius = {
    SM: "8px",
    MD: "16px",
    LG: "24px",
    circle: "50%",
    pill: "500px",
};

const defaultBorderWidth = {
    XS: "1px",
    SM: "2px",
    MD: "4px",
    LG: "8px",
};

const defaultFontFamilies = {
    base: "Roboto, sans-serif",
    highlight: "Righteous, cursive",
};

const defaultFontSizes = {
    _5XS: "0.5rem",
    _4XS: "0.6rem",
    _3XS: "0.75rem",
    _2XS: "0.8rem",
    XS: "1rem",
    SM: "1.2rem",
    MD: "1.4rem",
    LG: "1.6rem",
    XL: "2rem",
    _2XL: "2.4rem",
    _3XL: "3rem",
    _4XL: "4.2rem",
    _5XL: "6rem",
};

const defaultFontWeights = {
    light: "300",
    regular: "400",
    medium: "500",
    bold: "700",
    extraBold: "800",
};

const defaultFontHeights = {
    SM: "1",
    MD: "1.3",
    LG: "1.5",
};

const defaultFonts = {
    family: defaultFontFamilies,
    size: defaultFontSizes,
    weight: defaultFontWeights,
    height: defaultFontHeights,
};

export const defaultTheme = {
    spacing: defaultSpacings,
    opacities: defaultOpacity,
    shadows: defaultShadows,
    fonts: defaultFonts,
    borderRadius: defaultBorderRadius,
    borderWidth: defaultBorderWidth,
    colors: defaultColorScheme,
};

Object.freeze(defaultTheme);

export default defaultTheme;
