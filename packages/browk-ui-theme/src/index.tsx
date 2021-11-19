import {ThemeProvider } from './themeProvider';

import {ThemeConsumer} from './themeConsumer';

const Theme = {
  Provider: ThemeProvider,
  Consumer: ThemeConsumer,
};

export {browkBaseStyles} from './styles/base';
export {browkGlobalStyles} from './styles/global';
export {browkFonts} from './styles/fonts';


export type {ThemeShape} from './types/themes';
export type {GenericThemeShape} from './types/GenericThemeShape';
export {DefaultTheme} from './themes';
export {withTheme} from './withTheme';
export {useTheme} from './useTheme';
export {ThemeVariants} from './constants';
export {generateThemeFromTokens} from './generateThemeFromTokens';
export {generateTokensFromTheme} from './generateTokensFromTheme';
export {Theme};

// utils
export {remToPx} from './utils/remToPx';

export {StyledBase, ThemeProviderProps} from './themeProvider';