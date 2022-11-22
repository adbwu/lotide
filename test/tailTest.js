const assert = require('chai').assert;
const tail = require('../tail');

//assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
});