// Base styling system (emotion)

export type {StyledComponent} from '@emotion/styled';
export {default as styled} from '@emotion/styled';
export type {SerializedStyles} from '@emotion/react';
export {
  ThemeContext,
  ThemeProvider,
  withTheme,
  css as EmotionCSS,
  Global as StylingGlobals,
  keyframes,
} from '@emotion/react';

// Custom styling application (styled-system)
// https://github.com/styled-system/styled-system/tree/master/
export type {
  SystemStyleObject,
  SystemCssProperties,
  CSSPseudoSelectorProps,
  CSSSelectorObject,
  VariantProperty,
  UseThemeFunction,
  EmotionLabel,
  CSSObject,
} from '@styled-system/css';
export {css} from './css-function';
export {themeGet} from '@styled-system/theme-get';
export * from 'styled-system';
