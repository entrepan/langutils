const normalize = require('./normalize');
const process = require('./process');
const removeStopwords = require('./remove-stopwords');
const stem = require('./stem');
const stopwords = require('./stopwords');
const tokenize = require('./tokenize');

module.exports = {
  ...normalize,
  ...process,
  ...removeStopwords,
  ...stem,
  ...stopwords,
  ...tokenize,
};
