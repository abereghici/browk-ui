import {css} from '@browk-ui/styling-library';

export const browkGlobalStyles = css({
  html: {
    fontSize: '100%',
  },
  body: {
    backgroundColor: 'colorBackgroundBody',
    margin: 0,
    fontSize: 'fontSize30',
  },
  '*, *::after, *::before': {
    boxSizing: 'border-box',
  },
  '@media (prefers-reduced-motion: reduce)': {
    '*': {
      animationDuration: '0 !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0 !important',
      scrollBehavior: 'auto !important',
    },
  },
});
