import * as React from 'react';
import {ThemeContext} from '@browk-ui/styling-library';
import type {ThemeShape} from './types/themes';

const useTheme = (): ThemeShape => {
  const context = React.useContext(ThemeContext) as ThemeShape;
  if (!context) {
    throw new Error('[useHook]: must be used within the @browk-ui/theme provider');
  }
  return context;
};

export {useTheme};
