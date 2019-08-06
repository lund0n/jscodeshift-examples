/* eslint-env jest */
const { createTransformer, readInput, readOutput } = require('./test-utils');
const importRename = require('./import-rename');

const transform = createTransformer(importRename);

test('transforms correctly', () => {
  const input = readInput('import-rename');
  const expected = readOutput('import-rename');
  const output = transform(input);
  expect(output).toEqual(expected);
});
