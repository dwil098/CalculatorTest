const calculator = require('./calculator');

describe('Calculator Testing', () => {
  test('add 1 and 1 to be equal to 2', () => {
    expect(calculator(1, 1, '+')).toBe(2);
  });

  test('subtract 1 from 2 to be equal to 1', () => {
    expect(calculator(2, 1, '-')).toBe(1);
  });

  test('multiply 2 and 3 to be equal to 6', () => {
    expect(calculator(2, 3, '*')).toBe(6);
  });

  test('divide 6 by 2 to be equal to 3', () => {
    expect(calculator(6, 2, '/')).toBe(3);
  });

 
  test('perform an intentionally failed test', () => {
    expect(calculator(2, 2, '+')).toBe(5);
  });
});
