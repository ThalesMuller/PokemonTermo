import React, { useCallback } from "react";
import Container, { Table, Cell } from "./styles";
import { CSV } from "./CSV";
import { Typography } from "../../atoms/typography";
import { useTheme } from "styled-components";

export const TabelaYasmin = () => {
    const theme = useTheme();

    const tableFromCSV = CSV.split("\n").map((row) => row.split(";"));

    const COLORS = {
        header: theme.colors.other.table.header,
        A: theme.colors.other.table.blue.light,
        A_DARK: theme.colors.other.table.blue.dark,
        B: theme.colors.other.table.yellow.light,
        B_DARK: theme.colors.other.table.yellow.dark,
        C: theme.colors.other.table.red.light,
        C_DARK: theme.colors.other.table.red.dark,
        D: theme.colors.other.table.purple.light,
        D_DARK: theme.colors.other.table.purple.dark,
    };

    const renderDiv = (value, index) => {
        const color = () => {
            if (value[0].includes("Código")) return COLORS.header;
            if (value[0].includes("A")) return index % 2 === 0 ? COLORS.A : COLORS.A_DARK;
            if (value[0].includes("B")) return index % 2 === 0 ? COLORS.B : COLORS.B_DARK;
            if (value[0].includes("C")) return index % 2 === 0 ? COLORS.C : COLORS.C_DARK;
            return index % 2 === 0 ? COLORS.D : COLORS.D_DARK;
        };

        return (
            <>
                {value.map((char, i) => {
                    return (
                        <Cell color={color()}>
                            <Typography variant={value[0].includes("Código") ? "h5" : "tableCell"}>{char}</Typography>
                        </Cell>
                    );
                })}
            </>
        );
    };

    const renderTable = useCallback(() => {
        return <Table>{tableFromCSV.map(renderDiv)}</Table>;
    }, [tableFromCSV]);

    return <Container>{renderTable()}</Container>;
};
