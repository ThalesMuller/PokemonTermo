const themes = {
    default: {
        colors: {
            brand: {
                primary: {
                    lightest: "#F29A99",
                    light: "#F58080",
                    medium: "#ef5350",
                    dark: "#A32826",
                    darkest: "#702625",
                },
                secondary: {
                    lightest: "#F0EF67",
                    light: "#fdc91b",
                    medium: "#fdc91b",
                    dark: "#fdc91b",
                    darkest: "#fdc91b",
                },
            },
            feedback: {
                success: {
                    lightest: "#4FF082",
                    medium: "#4FF082",
                    darkest: "#15A342",
                },
                error: {
                    lightest: "#8A0000",
                    medium: "#F01C18",
                    darkest: "#A30300",
                },
                warning: {
                    lightest: "#704D00",
                    medium: "#F5BC00",
                    darkest: "#FFE285",
                },
                info: {
                    lightest: "#37A3F0",
                    medium: "#37A3F0",
                    darkest: "#2E72A3",
                },
            },
            support: {},
            tints: {},
            grayscale: {
                white: "#fff",
                lightest: "#ECECEC",
                light: "#C8C8C8",
                medium: "#747474",
                dark: "#555555",
                darkest: "#212121",
                black: "#000",
            },
        },
        fonts: {
            family: {
                base: "Roboto, sans-serif",
                highlight: "Righteous, cursive",
            },
            size: {
                _4XS: "10px",
                _3XS: "12px",
                _2XS: "14px",
                XS: "16px",
                SM: "20px",
                MD: "24px",
                LG: "32px",
                XL: "40px",
                _2XL: "56px",
                _3XL: "64px",
                _4XL: "72px",
                _5XL: "80px",
            },
            weight: {
                light: "300",
                regular: "400",
                medium: "500",
                bold: "700",
                extraBold: "800",
            },
            height: {
                SM: "1",
                MD: "1.3",
                LG: "1.5",
            },
        },
        borderRadius: {
            SM: "8px",
            MD: "16px",
            LG: "24px",
            circle: "50%",
            pill: "500px",
        },
        borderWidth: {
            XS: "1px",
            SM: "2px",
            MD: "4px",
            LG: "8px",
        },
        shadows: {
            level1: "0px 4px 16px rgba(0, 0, 0, 0.08)",
            level2: "0px 8px 24px rgba(0, 0, 0, 0.08)",
            level3: "0px 16px 32px rgba(0, 0, 0, 0.08)",
            level4: "0px 16px 48px rgba(0, 0, 0, 0.08)",
        },
        spacing: {
            none: "0",
            _3XS: "4px",
            _2XS: "8px",
            XS: "16px",
            SM: "24px",
            MD: "32px",
            LG: "40px",
            XL: "48px",
            _2XL: "56px",
            _3XL: "64px",
        },
        opacities: {
            semiOpaque: "0.8",
            intense: "0.64",
            medium: "0.32",
            weak: "0.24",
            light: "0.16",
            semiTransparent: "0.08",
            transparent: "0",
        },
    },
};

export default themes;
