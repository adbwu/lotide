// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let isEq = true;
  for (let i = 0; i < array1.length; i++) {
    array1[i] !== array2[i] ? isEq = false : "";
  }
  console.log(isEq);
  return isEq;
};

const middle = function(array) {
  let midArray = [];
  let halfArr = array.length / 2;
  if (array.length > 2) {
    array.length % 2 === 0 ? midArray.push(halfArr, (halfArr + 1)) : midArray.push(halfArr + .5);
  }
  return midArray;
};
