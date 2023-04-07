import styled, { createGlobalStyle, css } from "styled-components";
import {Oxygen} from '@next/font/google';

const OxygenLight = Oxygen({
  subsets: ['latin'],
  weight: '300'
});
const OxygenRegular = Oxygen({
  subsets: ['latin'],
  weight: '400'
});
const OxygenBold = Oxygen({
  subsets: ['latin'],
  weight: '700'
});


export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    smokeyBlack: '#0F0A0A',
    moss: '#92A07E',
    darkMoss: '#636E53',
    sand: '#D7B49E',
    champagne: '#EDDDD4',
    hunter: '#315B3D',
    error: '#A53F2B'
  },
  fontSize: {
    small: '0.75rem',
    medium: '1rem',
    large: '2rem',
    xLarge: '4rem'
  },
  fontWeight: {
    light: OxygenLight.style.fontFamily,
    normal: OxygenRegular.style.fontFamily,
    bold: OxygenBold.style.fontFamily
  }
}
type ThemeType = typeof theme;

export const GlobalStyles = createGlobalStyle<{ windowHeight: number }>`
  * {
    box-sixing: border-box;
    font-family: ${OxygenRegular.style.fontFamily};
  }
  body {
    margin: 0;
    height: ${({ windowHeight }) => windowHeight}px;
    width: 100vw;
    background: black;
    color: white;
    input[type='text'],
    input[type='number'],
    textarea {
      font-size: 16px;
    }
  }
  #__next {
    width: 100%;
    height: 100%;
  }
  .pac-item {
    background: rgba(0, 0, 0, 0.15);
    border: none;
    border-radius: 0.25rem;
    margin: 2px 2px 0 2px;
  }
`
export type Scale<Type, Properties = Record<string, unknown>> = Array<Type> & Properties;