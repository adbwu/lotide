const assertArray = require('../assertArray');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArray(result, ["Lighthouse", "Labs"]);