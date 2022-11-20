const assertObjectsEqual = function(result, actual, expected) {
  const inspect = require('util').inspect;
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqArrays = function(array1, array2) {
  let isEq = true;
  array1.length !== array2.length ? isEq = false : "";
  for (let i = 0; i < array1.length; i++) {
    array1[i] !== array2[i] ? isEq = false : "";
  }
  return isEq;
};


const eqObjects = function(object1, object2) {
  let areEqual = false;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key1 in object1) {
      for (let key2 in object2) {
        if (key1 === key2) {
          let valsEq = true;
          if (Array.isArray(object1[key1]) || Array.isArray(object2[key2]) === true) {
            if (eqArrays(object1[key1], object2[key2]) === true) {
              areEqual = true;
            } else {
              valsEq = false;
            }
          } else if (object1[key1] !== object2[key2]) {
            valsEq = false;
          }
          areEqual = valsEq;
        }
      }
    }
  }
  return (areEqual);
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), cd, cd2);
