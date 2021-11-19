import * as RawJSON from '@browk-ui/design-tokens/dist/tokens.raw.json';

// eslint-disable-next-line unicorn/prefer-module
const camelCase = require('lodash.camelcase');

export const DEPRECATE_TOKENS = Object.values(RawJSON.props)
  // @ts-ignore deprecated most definitely exists
  .filter((token) => token.deprecated)
  .map((deprecatedToken) => camelCase(deprecatedToken.name));
