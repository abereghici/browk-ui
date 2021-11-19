import * as React from 'react';
import {useReducedMotion, Globals as AnimatedGlobals} from '@browk-ui/animation-library';
import {styled, StylingGlobals, ThemeProvider as StyledThemeProvider} from '@browk-ui/styling-library';
import {DefaultTheme} from './themes';
import {browkGlobalStyles} from './styles/global';
import {browkBaseStyles} from './styles/base';
import {browkFonts} from './styles/fonts';
import {ThemeVariants} from './constants';

export const StyledBase = styled.div(browkBaseStyles);

// eslint-disable-next-line @typescript-eslint/ban-types
function getProviderThemeProps(theme: ThemeVariants, customBreakpoints?: string[]): {} {
  switch (theme) {
    case ThemeVariants.DEFAULT:
    default:
      return {
        ...DefaultTheme,
        breakpoints: customBreakpoints || DefaultTheme.breakpoints,
      };
  }
}

export interface ThemeProviderProps {
  customBreakpoints?: string[];
  theme?: ThemeVariants;
  disableAnimations?: boolean;
}

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  customBreakpoints,
  theme = ThemeVariants.DEFAULT,
  disableAnimations = false,
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion();
  React.useLayoutEffect(() => {
    AnimatedGlobals.assign({
      skipAnimation: disableAnimations || prefersReducedMotion,
    });
  }, [disableAnimations, prefersReducedMotion]);

  const providerThemeProps = getProviderThemeProps(theme, customBreakpoints);

  return (
    <StyledThemeProvider theme={providerThemeProps}>
      <StylingGlobals styles={browkGlobalStyles({theme: providerThemeProps})} />
      <StylingGlobals styles={browkFonts} />
      <StyledBase {...props} />
    </StyledThemeProvider>
  );
};

export {ThemeProvider};
