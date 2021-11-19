// https://styled-system.com/api/#shadow
import type {ThemeShape} from '@browk-ui/theme';
import type {ResponsiveValue} from '@browk-ui/styling-library';
import type {StyleReset} from './helpers';

// Tokens
export type BoxShadowOptions = keyof ThemeShape['shadows'] | 'none';
export type BoxShadow = ResponsiveValue<BoxShadowOptions>;

// Styled-system grouping
export interface ShadowProps {
  boxShadow?: BoxShadow;
  textShadow?: StyleReset;
}
