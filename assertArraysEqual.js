const assertArrays = function(array1, array2, expected) {
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

eqArrays([1, 2, 3, 4], [1, 2, 3, 4], false);