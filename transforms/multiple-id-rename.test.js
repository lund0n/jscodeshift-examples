/* eslint-env jest */
const { createTransformer, readInput, readOutput } = require('./test-utils');
const multipleIdRename = require('./multiple-id-rename');

const transform = createTransformer(multipleIdRename);

test('transforms correctly', () => {
  const input = readInput('multiple-id-rename');
  const expected = readOutput('multiple-id-rename');
  const output = transform(input);
  expect(output).toEqual(expected);
});
