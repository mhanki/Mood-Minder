import { colors } from "./colors";
import { space } from "./spacing";
/* import { sizes } from "./sizes"; */
import { fonts, fontWeights, fontSizes } from "./fonts";

interface CustomTheme {
  colors: {
    ui: { [key: string]: string; },
    bg: { [key: string]: string; },
    text: { [key: string]: string; }
  },
  space: { [key: string]: number; },
  fonts: { [key: string]: string; },
  fontSizes: { [key: string]: string; },
  fontWeights: { [key: string]: number;}
};

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
};

export const theme: CustomTheme = {
  colors,
  space,
  fonts,
  fontSizes,
  fontWeights,
};