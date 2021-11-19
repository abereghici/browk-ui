import {DefaultTheme} from '@browk-ui/theme';
import {propValidator} from './utils/propValidator';
import {DEPRECATE_TOKENS} from '../constants';

// Tokens
const BorderRadiusOptions = Object.keys(DefaultTheme.radii);
const BorderWidthOptions = Object.keys(DefaultTheme.borderWidths);
const BorderColorOptions = ['transparent', ...Object.keys(DefaultTheme.borderColors)];

export const isBorderRadiusTokenProp = propValidator(BorderRadiusOptions);
export const isBorderWidthTokenProp = propValidator(BorderWidthOptions);
export const isBorderColorTokenProp = propValidator(BorderColorOptions);
export const isDeprecatedBorderColorTokenProp = (props: Record<string, unknown>): Error | null => {
  if (props.borderColor != null && DEPRECATE_TOKENS.indexOf(props.borderColor) > 0) {
    console.error(`BrowkUI: "${props.borderColor}" is a deprecated design token.`);
  }
  return null;
};
