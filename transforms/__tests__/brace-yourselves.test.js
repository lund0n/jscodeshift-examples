/* eslint-env jest */
const { defineTest, defineInlineTest } = require('jscodeshift/dist/testUtils');
const transform = require('../brace-yourselves');

jest.autoMockOff();

defineTest(__dirname, 'brace-yourselves');

defineInlineTest(
  transform,
  {},
  `if (true) return 'Yes'`,
  `if (true) {
  return 'Yes'
}`,
  'Wraps the if in braces',
);

defineInlineTest(
  transform,
  {},
  `if (true) { return 'Yes'}`,
  `if (true) { return 'Yes'}`,
  'Ignores ifs that already have braces',
);

defineInlineTest(
  transform,
  {},
  `if (true) { return 'Yes'} else { return 'No'}`,
  `if (true) { return 'Yes'} else { return 'No'}`,
  'Ignores elses that already have braces',
);
