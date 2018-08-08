function transformer(file, api) {
  const j = api.jscodeshift

  return j(file.source)
    .find(j.IfStatement)
    .filter(
      p =>
        (p.value.consequent && p.value.consequent.type != 'BlockStatement') ||
        (p.value.alternate && p.value.alternate.type !== 'BlockStatement'),
    )
    .forEach(p => {
      if (p.value.consequent && p.value.consequent.type != 'BlockStatement') {
        p.value.consequent = j.blockStatement([p.value.consequent])
      }
      if (
        p.value.alternate &&
        p.value.alternate.type !== 'BlockStatement' &&
        p.value.alternate.type !== 'IfStatement'
      ) {
        p.value.alternate = j.blockStatement([p.value.alternate])
      }
    })
    .toSource()
}

module.exports = transformer
