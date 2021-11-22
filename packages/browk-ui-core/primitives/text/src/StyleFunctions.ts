import {css, system} from '@browk-ui/styling-library';
import type {CSSObject} from '@browk-ui/styling-library';
import type {BrowkUICustomCSS} from '@browk-ui/customization';
import {PseudoPropStyles} from './PseudoPropStyles';
import type {StyledTextProps} from './types';

const merge = require('deepmerge');

export const BrowkUIStyleProps = system({
  color: {
    property: 'color',
    scale: 'textColors',
  },
  cursor: true,
  outline: true,
  transition: true,
  textDecoration: true,
  textTransform: true,
  whiteSpace: true,
  wordBreak: true,
  wordWrap: true,
  fontVariantNumeric: true,
});

/**
 * Take _ prefixed style props and convert them to custom style props for CSS pseudo selectors
 *
 * @param {StyledTextProps} props any prop that Text can take
 * @return {*}  {(((props?: Record<string, unknown> | undefined) => CSSObject) | Record<string, never>)}
 */
export const getPseudoStyles = (
  props: Partial<StyledTextProps>
): ((props?: Record<string, any> | undefined) => CSSObject) | Record<string, any> => {
  const pseudoProps = Object.keys(props).filter((propName) => propName.startsWith('_')) as Array<
    keyof typeof PseudoPropStyles
  >;

  if (pseudoProps.length === 0) {
    return {};
  }

  const pseudoStyles: {[key: string]: any} = {};
  for (const pseudoProp of pseudoProps) {
    if (PseudoPropStyles[pseudoProp] != null) {
      pseudoStyles[PseudoPropStyles[pseudoProp]] = props[pseudoProp];
    }
  }

  return css(pseudoStyles);
};

/**
 * Used to return any custom styles provided for a BrowkUI element, that is declared in the elements object on the customization provider context.
 * Return custom css containing the custom styles that match the current element name being rendered where there is an elements object key
 * that matches the value of the browk-ui-element data attribute. Transform design tokens to their corresponding values as they appear on the theme
 *
 * @param {StyledTextProps} props
 * @return {*}  {((() => CSSObject) | Record<string, never>)}
 */
export const getCustomElementStyles = (props: StyledTextProps): (() => CSSObject) | Record<string, never> => {
  if (props != null && props.theme != null && props.theme.elements != null) {
    const themeElements = props.theme.elements;
    const targetElement = props['data-browk-ui-element'];

    if (themeElements[targetElement] != null) {
      const elementOverrides = themeElements[targetElement];
      const computedStyles = css(elementOverrides)(props) as BrowkUICustomCSS;
      const {variants, ...elementStyles} = computedStyles;
      let variantStyles = {};

      if (props.variant != null && variants != null && variants[props.variant] != null) {
        variantStyles = variants[props.variant];
      }

      return () => merge(elementStyles, variantStyles);
    }
  }
  return {};
};
