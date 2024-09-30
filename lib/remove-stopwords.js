const { ioc } = require('@entrepan/core');

function removeStopwords(words, locale, container = ioc) {
  const stopwords = container.get(`stopwords-${locale}`);
  return stopwords ? stopwords.removeStopwords(words) : words;
}

module.exports = { removeStopwords };
