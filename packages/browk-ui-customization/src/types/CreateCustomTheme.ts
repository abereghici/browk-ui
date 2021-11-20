import type {GenericThemeShape} from '@browk-ui/theme';
import type {BrowkUICustomCSS} from './BrowkUICSS';

export interface CreateCustomTheme {
  baseTheme: Partial<GenericThemeShape>;
  customBreakpoints?: string[];
  elements?: BrowkUICustomCSS;
  overrides: Partial<GenericThemeShape>;
}
