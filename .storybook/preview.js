import React from 'react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import isChromatic from 'chromatic/isChromatic';
import {withPerformance} from 'storybook-addon-performance';
import {StylingGlobals} from '@browk-ui/styling-library';
import {Theme} from '@browk-ui/theme';
import {Box} from '@browk-ui/box';

export const globalTypes = {
  theme: {
    name: 'BrowkUI Theme',
    description: 'Global theme for components',
    defaultValue: 'default',
    toolbar: {
      // All available icons
      // https://github.com/storybookjs/storybook/blob/master/lib/components/src/icon/icons.tsx
      icon: 'paintbrush',
      // array of plain string values or MenuItem shape (see below)
      items: ['default'],
    },
  },
  theme_layout: {
    name: 'Theme layout',
    description: 'Choose how you wish to view the story themes',
    defaultValue: 'default',
    toolbar: {
      icon: 'component',
      items: [{value: 'default', title: 'default'}],
    },
  },
};

const GlobalStyles = () => (
  <StylingGlobals
    styles={{
      body: {
        padding: '0 !important',
      },
    }}
  />
);

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;
    const layout = context.globals.theme_layout;
    switch (layout) {
      default:
      case 'default':
        return (
          <Theme.Provider theme={theme} disableAnimations={isChromatic()}>
            <GlobalStyles />
            <Box backgroundColor="colorBackground" color="colorText" padding="space80">
              <Story />
            </Box>
          </Theme.Provider>
        );
    }
  },
  withPerformance,
];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
