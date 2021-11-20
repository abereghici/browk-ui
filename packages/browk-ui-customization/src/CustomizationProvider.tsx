import * as React from 'react';
import {useReducedMotion, Globals as AnimatedGlobals} from '@browk-ui/animation-library';
import {StylingGlobals, ThemeProvider as StyledThemeProvider} from '@browk-ui/styling-library';
import {browkGlobalStyles, StyledBase, DefaultTheme} from '@browk-ui/theme';
import {createCustomTheme} from './utils';
import type {CustomizationProviderProps} from './types';

/**
 * The customization provider can be used to wrap a BrowkUI applications and customize the
 * look and feel of the components you are using. You can provide overrides to the entire
 * theme, supply custom breakpoints for responsive design, and customize tagged DOM
 * elements within each BrowkUI component with custom CSS.
 *
 * @param {*} {
 *   baseTheme = 'default',
 *   customBreakpoints,
 *   elements,
 *   theme,
 *   disableAnimations = false,
 *   ...props
 * }
 * @return {*}
 */
const CustomizationProvider: React.FC<CustomizationProviderProps> = ({
  baseTheme = 'default',
  customBreakpoints,
  elements,
  theme,
  disableAnimations = false,
  ...props
}) => {
  const customTheme = React.useMemo(
    () =>
      createCustomTheme({
        baseTheme: DefaultTheme,
        overrides: theme || {},
        elements: elements || {},
        customBreakpoints,
      }),
    [baseTheme, customBreakpoints, elements, theme]
  );

  const prefersReducedMotion = useReducedMotion();
  React.useLayoutEffect(() => {
    AnimatedGlobals.assign({
      skipAnimation: disableAnimations || prefersReducedMotion,
    });
  }, [disableAnimations, prefersReducedMotion]);

  return (
    <StyledThemeProvider theme={customTheme}>
      <StylingGlobals styles={browkGlobalStyles({theme: customTheme})} />
      <StyledBase {...props} />
    </StyledThemeProvider>
  );
};

export {CustomizationProvider};
