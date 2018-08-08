function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);
  root
    .find(j.ImportDeclaration, {
      source: {
        type: 'Literal',
        value: 'util/flatten',
      },
    })
    .forEach(p => {
      p.value.source.value = 'lodash/flatten';
    });
  return root.toSource({ quote: 'single' });
}

module.exports = transformer;
