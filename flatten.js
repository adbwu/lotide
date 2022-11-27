const flatten = ((array) => {
  let newArr = [];
  array.forEach( e => {
    if (Array.isArray(e)) {
      e.forEach(f => newArr.push(f));
    } else { 
      newArr.push(e);
    }
  });
  return newArr;
});

module.exports = flatten;