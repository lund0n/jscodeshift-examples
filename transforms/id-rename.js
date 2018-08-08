function transformer(file, api) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.Identifier, {
      name: 'a',
    })
    .replaceWith(j.identifier('greeting'))
    .toSource();
}

module.exports = transformer;
