var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns 120 when passed a value of 5', () => {
      const expected = 120;
      const result = Calculate.factorial(5);
      assert.equal(result, expected);
    });
    
    it('returns 24 when passed a value of 4', () => {
      const expected = 24;
      const result = Calculate.factorial(4);
      assert.equal(result, expected);
    });
    
    it('returns 1 when passed a value of 0', () => {
      const expected = 1;
      const result = Calculate.factorial(0);
      assert.equal(result, expected);
    });
  });
});