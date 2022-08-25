import { add } from './calc';

describe('Calc', () => {
  test('a test', () => {
    expect(add("")).toEqual(0)
  });
});
