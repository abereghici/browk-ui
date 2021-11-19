import {DefaultTheme} from '@browk-ui/theme';
import {propValidator} from './utils/propValidator';
import {DEPRECATE_TOKENS} from '../constants';

// Tokens
const BoxShadowOptions = ['none', ...Object.keys(DefaultTheme.shadows)];

export const isBoxShadowTokenProp = propValidator(BoxShadowOptions);
export const isDeprecatedBoxShadowTokenProp = (props: Record<string, unknown>): Error | null => {
  if (props.boxShadow != null && DEPRECATE_TOKENS.indexOf(props.boxShadow) > 0) {
    console.error(`BrowkUI: "${props.boxShadow}" is a deprecated design token.`);
  }
  return null;
};
