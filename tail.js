const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tail;
};

const assertArray = function(array1, array2) {
  for (let i = 0; i < array1; i++) {
    assertEqual(array1[i], array2[i]);
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArray(result, ["Lighthouse", "Labs"]);