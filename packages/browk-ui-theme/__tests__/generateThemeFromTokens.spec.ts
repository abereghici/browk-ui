import {generateThemeFromTokens} from '../src/generateThemeFromTokens';

describe('generateThemeFromTokens', () => {
  it('should generate a theme in the desired shape based on design tokens provided', () => {
    expect(
      generateThemeFromTokens({
        backgroundColors: {colorBackground: 'red'},
        borderColors: {colorBorder: 'blue'},
        borderWidths: {borderWidth0: '10px'},
        radii: {borderRadius0: '20px'},
        fonts: {fontFamilyCode: 'arial'},
        fontSizes: {fontSize80: '300px'},
        fontWeights: {fontWeightBold: '800'},
        lineHeights: {lineHeight0: '20px'},
        boxShadows: {shadow: 'grey'},
        sizings: {
          size0: '1px',
          size10: '1px',
          size20: '1px',
          size30: '1px',
          size40: '1px',
          size50: '1px',
          size60: '1px',
          size70: '1px',
          size80: '1px',
          size90: '1px',
          size100: '1px',
          size110: '1px',
          size120: '1px',
          size130: '1px',
          sizeIcon10: '1px',
          sizeIcon20: '1px',
          sizeIcon30: '1px',
          sizeIcon40: '1px',
          sizeIcon50: '1px',
          sizeIcon60: '1px',
          sizeIcon70: '1px',
          sizeIcon80: '1px',
        },
        spacings: {space10: '28px'},
        textColors: {colorText: 'black'},
        zIndices: {zIndex0: '-20'},
      })
    ).toMatchSnapshot();
  });
});
