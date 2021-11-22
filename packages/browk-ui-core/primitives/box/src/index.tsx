import * as React from 'react';
import {
  styled,
  compose,
  layout,
  space,
  background,
  typography,
  border,
  boxShadow,
  position,
  flexbox,
} from '@browk-ui/styling-library';
import type {StyledComponent} from '@browk-ui/styling-library';
import {
  isDeprecatedBackgroundColorTokenProp,
  isDeprecatedBorderColorTokenProp,
  isDeprecatedBoxShadowTokenProp,
  isDeprecatedTextColorTokenProp,
} from '@browk-ui/style-props';
import type {BoxProps, StyledBoxProps} from './types';
import {getPseudoStyles, BrowkUIStyleProps, getCustomElementStyles} from './StyleFunctions';

export const StyledBox = styled.div<StyledBoxProps>(
  {
    boxSizing: 'border-box',
  },
  compose(space, layout, flexbox, background, border, boxShadow, position, typography, BrowkUIStyleProps),
  getPseudoStyles,
  getCustomElementStyles
) as StyledComponent<Omit<React.HTMLAttributes<HTMLElement>, 'color'>, BoxProps>;

const Box = React.forwardRef<HTMLElement, BoxProps>(({children, element = 'BOX', ...props}, ref) => {
  return (
    <StyledBox data-browk-ui-element={element} ref={ref} {...props}>
      {children}
    </StyledBox>
  );
});

Box.displayName = 'Box';
Box.propTypes = {
  backgroundColor: isDeprecatedBackgroundColorTokenProp,
  borderColor: isDeprecatedBorderColorTokenProp,
  boxShadow: isDeprecatedBoxShadowTokenProp,
  color: isDeprecatedTextColorTokenProp,
};

export {Box};
export * from './types';
export * from './SafelySpreadProps';

export {getCustomElementStyles} from './StyleFunctions';
