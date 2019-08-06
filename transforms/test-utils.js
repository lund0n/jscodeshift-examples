const { resolve } = require('path');
const { readFileSync } = require('fs');
const jscodeshift = require('jscodeshift');

const createTransformer = transformer => (source, path = 'index.js') =>
  transformer({ path, source }, { jscodeshift, stats: () => {} });

const readInput = (filename, base = resolve(__dirname, '__testfixtures__')) =>
  readFileSync(resolve(base, filename + '.input.js'), 'utf8');

const readOutput = (filename, base = resolve(__dirname, '__testfixtures__')) =>
  readFileSync(resolve(base, filename + '.output.js'), 'utf8');

module.exports = {
  createTransformer,
  readInput,
  readOutput,
};
