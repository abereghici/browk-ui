import type {ThemeProviderProps, GenericThemeShape} from '@browk-ui/theme';
import type {BrowkUICustomCSS} from './BrowkUICSS';

export interface CustomizationProviderProps {
  /**
   * Choose the base theme you would like your application to extend from
   *
   * @type {('default')}
   * @memberof CustomizationProviderProps
   */
  baseTheme?: 'default';
  /**
   * Provide an array of breakpoint sizes that you would like to be able to use in responsive
   * layouts, using the responsive style props
   *
   * @type {ThemeProviderProps['customBreakpoints']}
   * @memberof CustomizationProviderProps
   */
  customBreakpoints?: ThemeProviderProps['customBreakpoints'];
  /**
   * Manually disable all animations in the components using the animation library
   * useful for testing components such as performing visual regression testing
   *
   * @type {ThemeProviderProps['disableAnimations']}
   * @memberof CustomizationProviderProps
   */
  disableAnimations?: ThemeProviderProps['disableAnimations'];
  /**
   * Supply the Customization Provider an object of Elements that you would like to
   * customize the CSS of. Use the element name provided by BrowkUI as a key and provide
   * any Valid CSS in the Emotion CSS Object format
   *
   * @type {[key: string]: BrowkUICustomCSS}
   * @memberof CustomizationProviderProps
   */
  elements?: {[key: string]: BrowkUICustomCSS};
  /**
   * Provide a full or partial BrowkUI theme to be merged into the base theme that you provide
   *
   * @type {Partial<GenericThemeShape>}
   * @memberof CustomizationProviderProps
   */
  theme?: Partial<GenericThemeShape>;
}
