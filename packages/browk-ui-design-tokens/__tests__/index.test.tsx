import theo from 'theo';
import path from 'node:path';

beforeAll(() => {
  theo.registerTransform('web', ['color/rgb']);
});

describe('Design Tokens', () => {
  it('matches the Global theme', () => {
    const theme = theo.convertSync({
      transform: {
        type: 'web',
        // eslint-disable-next-line unicorn/prefer-module
        file: path.resolve(__dirname, '../tokens/tokens.yml'),
      },
      format: {
        type: 'json',
      },
    });
    expect(theme).toMatchSnapshot();
  });
});
