const eqArrays = function(array1, array2) {
  let isEq = true;
  array1.length !== array2.length ? isEq = false : "";
  for (let i = 0; i < array1.length; i++) {
    array1[i] !== array2[i] ? isEq = false : "";
  }
  return isEq;
};

module.exports = eqArrays;