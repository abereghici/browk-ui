import type {GenericThemeShape} from '@browk-ui/theme';
import type {BrowkUICustomCSS} from './BrowkUICSS';

export type CustomTheme = Partial<GenericThemeShape> & {
  elements?: {
    [key: string]: BrowkUICustomCSS;
  };
};
