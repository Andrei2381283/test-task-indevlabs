const findMissing = require('./index');

describe('Test finding missing number function', () => {
  it('Input: [5,0,1,3,2] Output: 4', () => {
    expect(findMissing([5,0,1,3,2])).toBe(4);
  });

  it('Input: [7,9,10,11,12] Output: 8', () => {
    expect(findMissing([7,9,10,11,12])).toBe(8);
  });

  it('Input: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17] Output: 16', () => {
    expect(findMissing([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17])).toBe(16);
  });

  it('Input: [1,2,3,4,5,6,7] Output: null', () => {
    expect(findMissing([1,2,3,4,5,6,7])).toBe(null);
  });

  it('Input: [1,1,1,1,3] Error: Array has duplicates', () => {
    expect(() => findMissing([1,1,1,1,3])).toThrow('Array has duplicates');
  });

  it('Input: [1,11] Error: Multiple answers', () => {
    expect(() => findMissing([1,11])).toThrow('Multiple answers');
  });

  it('Input: [null] Error: Array contains non number value', () => {
    expect(() => findMissing([null])).toThrow('Array contains non number value');
  });

  it('Input: ["1","2","4"] Error: Array contains non number value', () => {
    expect(() => findMissing(["1","2","4"])).toThrow('Array contains non number value');
  });

  it('Input: ["string"] Error: Array contains non number value', () => {
    expect(() => findMissing(["string"])).toThrow('Array contains non number value');
  });

  it('Input: [] Output: null', () => {
    expect(findMissing([])).toBe(null);
  });
});
