function transformer(file, api) {
  const j = api.jscodeshift;

  function replaceIdentifier(path, from, to) {
    j(path)
      .find(j.Identifier, {
        name: from,
      })
      .replaceWith(j.identifier(to));
  }

  const root = j(file.source);
  root
    .find(j.FunctionDeclaration, {
      id: {
        type: 'Identifier',
        name: 'showGreeting',
      },
    })
    .forEach(p => {
      replaceIdentifier(p, 'name', 'anotherName');
    });
  return root.toSource();
}

module.exports = transformer;
