const defaultPrimaryColors = {
    lightest: "#FFBACB",
    light: "#F299AF",
    medium: "#F01C18",
    dark: "#A6586B",
    darkest: "#702625",
};
const defaultSecondaryColors = {
    lightest: "#F0EF67",
    light: "#fdc91b",
    medium: "#fdc91b",
    dark: "#fdc91b",
    darkest: "#fdc91b",
};

const defaultBrandColors = {
    primary: defaultPrimaryColors,
    secondary: defaultSecondaryColors,
};

const defaultSuccessColors = {
    lightest: "#4FF082",
    medium: "#4FF082",
    darkest: "#15A342",
};

const defaultWarningColors = {
    lightest: "#704D00",
    medium: "#F5BC00",
    darkest: "#FFE285",
};

const defaultGrayscaleColors = {
    white: "#fff",
    lightest: "#ECECEC",
    light: "#C8C8C8",
    medium: "#9E9E9E",
    dark: "#555555",
    darkest: "#212121",
    black: "#000",
};

const defaultErrorColors = {
    lightest: "#8A0000",
    medium: defaultGrayscaleColors.dark,
    darkest: "#A30300",
};

const defaultInfoColors = {
    lightest: "#37A3F0",
    medium: "#37A3F0",
    darkest: "#2E72A3",
};

const defaultFeedbackColors = {
    success: defaultSuccessColors,
    error: defaultErrorColors,
    warning: defaultWarningColors,
    info: defaultInfoColors,
};

const defaultSupportColors = {
    blue: "#115eca",
};

const defaultPokemonTypeColors = {
    normal: "#a4acaf",
    fire: "#fd7d24",
    water: "#4592c4",
    electric: "#eed535",
    grass: "#9bcc50",
    ice: "#51c4e7",
    fighting: "#d56723",
    poison: "#b97fc9",
    ground: "linear-gradient(to bottom, #f7de3f, #ab9842)",
    flying: "linear-gradient(to bottom, #3dc7ef, #bdb9b8)",
    psychic: "#f366b9",
    bug: "#729f3f",
    rock: "#a38c21",
    ghost: "#7b62a3",
    dragon: "linear-gradient(to bottom, #53a4cf, #f16e57)",
    dark: "#707070",
    steel: "#9eb7b8",
    fairy: "#fdb9e9",
};

const defaultTableColors = {
    header: "#342E37",
    yellow: {
        light: "#FCDC0E",
        dark: "#FFE743",
    },
    red: {
        light: "#FF1C46",
        dark: "#F90936",
    },
    blue: {
        light: "#286CFF",
        dark: "#155EFD",
    },
    purple: {
        light: "#F646FF",
        dark: "#F62BFF",
    },
};

const defaultOtherColors = {
    pokemonTypes: defaultPokemonTypeColors,
    table: defaultTableColors,
};

const defaultColorScheme = {
    brand: defaultBrandColors,
    feedback: defaultFeedbackColors,
    grayscale: defaultGrayscaleColors,
    support: defaultSupportColors,
    other: defaultOtherColors,
};

export default defaultColorScheme;
