/* eslint-env jest */
const { createTransformer, readInput, readOutput } = require('./test-utils');
const braceYourselves = require('./brace-yourselves');

const transform = createTransformer(braceYourselves);

describe('using snapshots', () => {
  test('wraps the if in braces', () => {
    const input = `if (true) return "Yes"`;
    const output = transform(input);
    expect(output).toMatchSnapshot();
  });

  test('ignores ifs that already have braces', () => {
    const input = `if (true) { return "Yes"}`;
    const output = transform(input);
    expect(output).toMatchSnapshot();
  });

  test('ignores elses that already have braces', () => {
    const input = `if (true) { return "Yes"} else { return "No"}`;
    const output = transform(input);
    expect(output).toMatchSnapshot();
  });
});

describe('using inline snapshots', () => {
  test('wraps the else in braces', () => {
    const input = `
if (true) {
  return "Yes"
} else return "No"
`;
    const output = transform(input);
    expect(output).toMatchInlineSnapshot(`
"
if (true) {
  return \\"Yes\\"
} else {
  return \\"No\\"
}
"
`);
  });
});

describe('using fixtures', () => {
  const input = readInput('brace-yourselves');
  const expected = readOutput('brace-yourselves');
  const output = transform(input);
  expect(output).toEqual(expected);
});
