// aqui vai codigos totalmente de types cript arquivo que só tem tipagens

import 'styled-components';
import { defaultTheme } from '../styles/Themes/default';

type themeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends themeType { }
}