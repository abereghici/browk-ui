import * as React from 'react';
import {
  boxShadow,
  compose,
  display,
  overflow,
  position,
  space,
  styled,
  typography,
  verticalAlign,
} from '@browk-ui/styling-library';
import type {StyledComponent} from '@browk-ui/styling-library';
import {isDeprecatedBoxShadowTokenProp, isDeprecatedTextColorTokenProp} from '@browk-ui/style-props';
import type {TextProps, StyledTextProps} from './types';
import {getPseudoStyles, BrowkUIStyleProps, getCustomElementStyles} from './StyleFunctions';

export const StyledText = styled.div<StyledTextProps>(
  {
    margin: 0,
    padding: 0,
  },
  compose(boxShadow, display, overflow, position, space, typography, verticalAlign, BrowkUIStyleProps),
  getPseudoStyles,
  getCustomElementStyles
) as StyledComponent<Omit<React.HTMLAttributes<HTMLElement>, 'color'>, TextProps>;

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {children, color = 'colorText', fontSize = 'fontSize30', lineHeight = 'lineHeight30', element = 'TEXT', ...props},
    ref
  ) => {
    return (
      <StyledText
        data-browk-ui-element={element}
        ref={ref}
        color={color}
        fontSize={fontSize}
        lineHeight={lineHeight}
        {...props}
      >
        {children}
      </StyledText>
    );
  }
);

Text.displayName = 'Text';
Text.propTypes = {
  boxShadow: isDeprecatedBoxShadowTokenProp,
  color: isDeprecatedTextColorTokenProp,
};

export {Text};
export * from './types';
export * from './SafelySpreadProps';
