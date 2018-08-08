function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);
  root
    .find(j.Identifier, {
      name: 'a',
    })
    .replaceWith(j.identifier('greeting'));
  root
    .find(j.Identifier, {
      name: 'b',
    })
    .replaceWith(j.identifier('farewell'));
  return root.toSource();
}

function transformer2(file, api) {
  const j = api.jscodeshift;

  const toUpdate = {
    a: 'greeting',
    b: 'farewell',
  };
  return j(file.source)
    .find(j.Identifier)
    .filter(p => toUpdate[p.value.name])
    .replaceWith(p => j.identifier(toUpdate[p.value.name]))
    .toSource();
}
module.exports = transformer;
