import {DefaultTheme} from '../src';

describe('Default theme', () => {
  it('should match the snapshot', () => {
    expect(Object.keys(DefaultTheme).sort()).toMatchSnapshot();
  });
});
