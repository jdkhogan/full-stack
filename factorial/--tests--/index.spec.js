const Calculate = require("../index.js");


describe('Calculate', () => {
  test('returns 120 when passed a value of 5', () => {
    const expected = 120;
    const input = 5;
    expect(Calculate.factorial(input)).toEqual(expected);
  });
  
  test('returns 24 when passed a value of 4', () => {
    const expected = 24;
    const input = 4;
    expect(Calculate.factorial(input)).toEqual(expected);
  });
  
  test('returns 1 when passed a value of 0', () => {
    const expected = 1;
    const input = 0;
    expect(Calculate.factorial(input)).toEqual(expected);
  });
});