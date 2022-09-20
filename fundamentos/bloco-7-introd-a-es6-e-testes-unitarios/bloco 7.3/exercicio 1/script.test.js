/*
*/

const { sum, myRemove, myFizzBuzz, encode, decode, techList } = require('./script');

describe('[testes da função "sum"]', () => {
  test('check if the sum of 4 and 5 is equal to 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('check if the sum of 0 and 0 is equal to 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('check if the sum function will throw an error if the parameters are invalid', () => {
    expect(() => sum(4, '5')).toThrow();
  });
});

//

describe('[testes da função "myRemove"]', () => {
  const testArray = [ 1, 2, 3, 4, 5 ]
  const testResult1 = [ 1, 2, 4, 5 ]
  const testResult2 = [ 1, 2, 3, 4 ]

  test('check if function call retuns the expected copy arrayv (1, 2, 4, 5)', () => {
    expect(myRemove(testArray, 3)).toEqual(testResult1);
  });

  test('check if function call does not retuns the expected array', () => {
    expect(myRemove(testArray, 3)).not.toContain(testArray);
  });

  test('check if function call returns the expected copy array (1, 2, 3, 4)', () => {
    expect(myRemove(testArray, 5)).toEqual(testResult2);
  });
});

//

describe('[testes da função "myFizzBuzz"]', () => {

  test('check if we have the expected value (fizzbuzz)', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  test('check if we have the expected value (fizz)', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  });

  test('check if we have the expected value (buzz)', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  });

  test('check if we have the expected value (number)', () => {
    expect(myFizzBuzz(11)).toBe(11);
  });

  test('check if we have the expected value (false)', () => {
    expect(myFizzBuzz('15')).toEqual(false);
  });
});

//

describe('[testes da função "encode"]', () => {
  test('check if we have an actual function', () => {
    expect(typeof encode).toBe('function');
  });

  test('check if the string passed is encoded (12345)', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  test('check if the string passed is valid', () => {
    expect(encode('uoiea')).not.toBe('12345');
  });

  test('check if the passed string size is equal to coded string size', () => {
    expect(encode('aeiou').length).toBe(('12345').length);
  });
});

//

describe('[testes da função "decode"]', () => {
  test('check if we have an actual function', () => {
    expect(typeof decode).toBe('function');
  });
  test('check if the string passed is decoded (aeiou)', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  test('check if the string passed is valid', () => {
    expect(decode('54321')).not.toBe('aeiou');
  });
  test('check if the passed string size is equal to coded string size', () => {
    expect(decode('12345').length).toBe(('aeiou').length);
  });
});

//

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList([ 'React', 'Jest', 'HTML', 'CSS', 'JavaScript' ], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});
