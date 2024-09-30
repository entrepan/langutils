const { ioc } = require('@entrepan/core');

const defaultTokenize = (text) => text.split(/[\s,.!?;:([\]'"¡¿)/]+/).filter((x) => x);

function tokenize(text, locale, container = ioc) {
  const fn = container.get(`tokenize-${locale}`);
  if (fn) {
    return fn(text);
  }
  return defaultTokenize(text);
}

module.exports = { tokenize, defaultTokenize };
