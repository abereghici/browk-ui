import '@testing-library/jest-dom';
import * as TestingLibrary from '@testing-library/react';

import * as jestEmotion from '@emotion/jest';
import {toHaveNoViolations} from 'jest-axe';

expect.extend(toHaveNoViolations);
expect.extend(jestEmotion.matchers);

TestingLibrary.configure({computedStyleSupportsPseudoElements: false});
