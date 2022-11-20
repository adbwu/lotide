const assertArrays = function(array1, array2) {
  let isEq = true;
  array1.length !== array2.length ? isEq = false : "";
  for (let i = 0; i < array1.length; i++) {
    array1[i] !== array2[i] ? isEq = false : "";
  }
  if (isEq === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const without = function(array, remove) {
  let newArray = [];
  array.forEach(num => {
    let keep = true;
    remove.forEach(element => {
      num === element ? keep = false : "";
    });
    keep ? newArray.push(num) : "";
  });
  return newArray;
};

assertArrays(without([1, 2, 3], [1]), [2, 2]);// => [2, 3]
assertArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);