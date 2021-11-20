import theo from 'theo';
import path from 'path';

beforeAll(() => {
  theo.registerTransform('web', ['color/rgb']);
});

describe('Design Tokens', () => {
  it('matches the Global theme', () => {
    const theme = theo.convertSync({
      transform: {
        type: 'web',
        file: path.resolve(__dirname, '../tokens/tokens.yml'),
      },
      format: {
        type: 'json',
      },
    });
    expect(theme).toMatchSnapshot();
  });
});
