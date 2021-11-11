require('@testing-library/jest-dom');
const TestingLibrary = require('@testing-library/react');
const {matchers: jestEmotionMatchers} = require('@emotion/jest');
const {toHaveNoViolations} = require('jest-axe');

expect.extend(toHaveNoViolations);
expect.extend(jestEmotionMatchers);

TestingLibrary.configure({computedStyleSupportsPseudoElements: false});
