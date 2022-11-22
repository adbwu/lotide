// FUNCTION IMPLEMENTATION
const middle = function(array) {
  let midArray = [];
  let halfArr = array.length / 2;
  if (array.length > 2) {
    array.length % 2 === 0 ? midArray.push(halfArr, (halfArr + 1)) : midArray.push(halfArr + .5);
  }
  return midArray;
};

module.exports = middle;