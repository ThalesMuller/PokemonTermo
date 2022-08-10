import React from "react";
import { CharInput } from "../../atoms/charInput";
import { Typography } from "../../atoms/typography";
import { useTheme } from "styled-components";
import Container, { WordWrapper, CharWrapper } from "./styles";

export const HowToPlayModal = () => {
    const theme = useTheme();
    const color = theme.colors.grayscale.white;
    const variant = "body1";

    return (
        <Container>
            <Typography color={color} variant={variant} className='breakline'>
                Descubra a Pokémon de hoje em até 6 tentativas. Após cada tentativa, o jogo irá mostrar quão proximo
                você está da solução.
            </Typography>
            <WordWrapper>
                <CharInput state='success' value='L' />
                <CharInput state='error' value='A' />
                <CharInput state='error' value='P' />
                <CharInput state='error' value='R' />
                <CharInput state='error' value='A' />
                <CharInput state='error' value='S' />
            </WordWrapper>
            <Typography color={color} variant={variant}>
                A letra
            </Typography>
            <CharWrapper>
                <CharInput state='success' value='L' inline={true} />
            </CharWrapper>
            <Typography color={color} variant={variant}>
                faz parte da palavra e está na posição correta, as demais não existem na palavra.
            </Typography>
            <WordWrapper>
                <CharInput state='error' value='P' />
                <CharInput state='error' value='I' />
                <CharInput state='error' value='D' />
                <CharInput state='warn' value='G' />
                <CharInput state='error' value='E' />
                <CharInput state='error' value='Y' />
            </WordWrapper>
            <Typography color={color} variant={variant}>
                A letra
            </Typography>
            <CharWrapper>
                <CharInput state='warn' value='G' inline={true} />
            </CharWrapper>
            <Typography color={color} variant={variant}>
                faz parte da palavra, porém está na posição errada.
            </Typography>

            <Typography color={color} variant={variant} className='breakline'>
                Considere apenas Pokémons até a sexta geração, são aceitos apenas nomes de Pokémons válidos.
            </Typography>
            <Typography color={color} variant={variant} className='breakline'>
                Alguns Pokémons como Ho-oh, Mr.Mime e Mime.jr não estão incluídos.
            </Typography>
            <Typography color={color} variant={variant} className='breakline'>
                Cada dia aparece um Pokémon diferente!
            </Typography>
        </Container>
    );
};
