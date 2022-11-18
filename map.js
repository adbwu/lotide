const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);


const assertArraysEqual = function(array1, array2, expected) {
  let isEq = true;
  array1.length !== array2.length ? isEq = false : "";
  for (let i = 0; i < array1.length; i++) {
    array1[i] !== array2[i] ? isEq = false : "";
  }
  if (isEq === expected) {
    console.log(`✅✅✅ Assertion Passed: ${isEq} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${isEq} !== ${expected}`);
  }
};

assertArraysEqual(results1, ["g", "c", "t", "k", "t"], true);