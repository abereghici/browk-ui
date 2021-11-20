import type {
  SystemStyleObject,
  SystemCssProperties,
  CSSPseudoSelectorProps,
  CSSSelectorObject,
} from '@browk-ui/styling-library';
import type {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from '@browk-ui/style-props';

type AllStyleProps = BackgroundProps &
  BorderProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TypographyProps;

export type BrowkUICustomCSS = SystemStyleObject &
  AllStyleProps & {
    variants?: {
      [key: string]: (SystemCssProperties | CSSPseudoSelectorProps | CSSSelectorObject) & AllStyleProps;
    };
  };
