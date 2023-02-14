import { createGlobalStyle } from "styled-components";
// const EduQLD = require('../../fonts/Edu_QLD_Beginner/EduQLDBeginner-VariableFont_wght.ttf');
import {Oxygen } from '@next/font/google';
// import EduQLD from '../../fonts/Edu_QLD_Beginner/EduQLDBeginner-VariableFont_wght.ttf';
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
export const GlobalStyles = createGlobalStyle`
  * {
    box-sixing: border-box;
    font-family: ${OxygenRegular.style.fontFamily};
  }
  body {
    margin: 0;
    height: 100vh;
    width: 100vw;
  }
  #__next {
    width: 100%;
    height: 100%;
  }
`

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000'
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