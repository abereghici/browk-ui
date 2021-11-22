import * as React from 'react';
import {Box} from '@browk-ui/box';
import {Text} from '@browk-ui/text';
import {Separator} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Separator',
  component: Separator,
};

export const Horizontal = (): React.ReactNode => {
  return (
    <>
      <Box marginBottom="space30">Nulla vitae elit libero, a pharetra augue.</Box>
      <Separator orientation="horizontal" verticalSpacing="space70" />
      <Box marginBottom="space30">Nulla vitae elit libero, a pharetra augue.</Box>
      <Separator orientation="horizontal" verticalSpacing="space70" />
      <Box marginBottom="space30">Nulla vitae elit libero, a pharetra augue.</Box>
      <Separator orientation="horizontal" verticalSpacing="space70" />
      <Box marginBottom="space30">Nulla vitae elit libero, a pharetra augue.</Box>
    </>
  );
};

Horizontal.story = {
  name: 'horizontal',
};

export const Vertical = (): React.ReactNode => {
  return (
    <Box display="flex" marginBottom="space70">
      <Text as="span">Option 1</Text>
      <Separator orientation="vertical" horizontalSpacing="space40" />
      <Text as="span">Option 2</Text>
      <Separator orientation="vertical" horizontalSpacing="space40" />
      <Text as="span">Option 3</Text>
      <Separator orientation="vertical" horizontalSpacing="space40" />
      <Text as="span">Option 4</Text>
      <Separator orientation="vertical" horizontalSpacing="space40" />
      <Text as="span">Option 5</Text>
    </Box>
  );
};

Vertical.story = {
  name: 'vertical',
};
