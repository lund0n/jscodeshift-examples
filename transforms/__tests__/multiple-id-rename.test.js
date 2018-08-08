/* eslint-env jest */
const { defineTest } = require('jscodeshift/dist/testUtils');

jest.autoMockOff();

defineTest(__dirname, 'multiple-id-rename');
