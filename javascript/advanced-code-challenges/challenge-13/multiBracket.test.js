'use strict';

const { validateBrackets } = require('./multiBracket.js');

describe('testing the validate brackets function', () => {

  it('should return false if there is only one bracket in the string', () => {

    let res1 = validateBrackets('(');
    let res2 = validateBrackets('[');
    let res3 = validateBrackets('{');
    let res4 = validateBrackets(')');
    let res5 = validateBrackets(']');
    let res6 = validateBrackets('}');

    expect(res1).toEqual(false);
    expect(res2).toEqual(false);
    expect(res3).toEqual(false);
    expect(res4).toEqual(false);
    expect(res5).toEqual(false);
    expect(res6).toEqual(false);
  });

  it('should return false on mismatched pairs', () => {

    let res1 = validateBrackets('(]');
    let res2 = validateBrackets('[}');
    let res3 = validateBrackets('{)');
    let res4 = validateBrackets('{)');
    let res5 = validateBrackets('(]');
    let res6 = validateBrackets('[}');

    expect(res1).toEqual(false);
    expect(res2).toEqual(false);
    expect(res3).toEqual(false);
    expect(res4).toEqual(false);
    expect(res5).toEqual(false);
    expect(res6).toEqual(false);
  });

  it('should return true if there are no brackets in the string', () => {

    let res = validateBrackets('test');

    expect(res).toEqual(true);
  });
});
