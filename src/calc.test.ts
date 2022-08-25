import { add } from './calc';

describe('Calc', () => {
  test('return 0 when passed an empty string', () => {
    expect(add("")).toEqual(0)
  });

  test('return the number when passed a single number', () => {
    expect(add("1")).toEqual(1)
  });

  const cases = [[1,2],[2,3]]

  test.each(cases)("returns the sum of %p and %p seperated by commas", (a,b) => {
    expect(add(`${a},${b}`)).toEqual(a+b)
  })

  test('return the sum when passed number strings with mixed newline and comma seperators', () => {
    expect(add("1\n2,3")).toEqual(6)
  });

  test('can set the delimeter', () => {
    expect(add("//;\n1;2;3")).toEqual(6)
  });

  // test('can set a delimeter of more than one character', () => {
  //   expect(add("//;,\n1;,2;,3")).toEqual(6)
  // });
});
