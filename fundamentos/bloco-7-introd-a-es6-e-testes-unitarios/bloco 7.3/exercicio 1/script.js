/*
*/

const sum = (a, b) => {

  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers!');
  }

  return (a + b);
}


const myRemove = (arr, item) => {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[ index ]) {
      newArr.push(arr[ index ]);
    }
  }
  return newArr;
}

const myFizzBuzz = (num) => {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const vogais = [ 'a', 'e', 'i', 'o', 'u' ];
const code = [ 1, 2, 3, 4, 5 ];

const encode = (text) => {
  const caracters = text.split('');
  caracters.forEach((letra, i) => {
    vogais.forEach((vogal, k) => {
      caracters[ i ] = (letra === vogal) ? code[ k ] : caracters[ i ];
    });
  });

  return caracters.join('');
}

const decode = (text) => {
  const caracters = text.split('');
  caracters.forEach((caracter, i) => {
    code.forEach((num, k) => {
      caracters[ i ] = (caracter === num.toString()) ? vogais[ k ] : caracters[ i ];
    });
  });

  return caracters.join('');
}

const techList = (arr, name) => {
  const sortedArray = arr.sort();
  const newArray = [];

  if (arr.length === 0) {
    return 'Vazio!';
  }

  for (let i = 0; i < sortedArray.length; i += 1) {
    newArray.push({ tech: sortedArray[ i ], name: name });
  }

  return newArray;
}

module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList };