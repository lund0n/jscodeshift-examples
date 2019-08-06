/* eslint-env jest */
const { createTransformer, readInput, readOutput } = require('./test-utils');
const idRename = require('./id-rename');

const transform = createTransformer(idRename);

test('transforms correctly', () => {
  const input = readInput('id-rename');
  const expected = readOutput('id-rename');
  const output = transform(input);
  expect(output).toEqual(expected);
});
