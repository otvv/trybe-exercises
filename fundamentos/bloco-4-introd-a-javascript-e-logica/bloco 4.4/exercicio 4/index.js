/*
*/

function isPalidrome(string) {

  let stringSplitted = '';
  let generatedArray = [];
  let stringReversed = '';

  // make an array with our string
  stringSplitted = string.split('');

  // reverse generated array
  generatedArray = stringSplitted.reverse();

  // turn reversed array into a string
  stringReversed = generatedArray.join('');

  // do necessary comparisons
  if (string === stringReversed) {
    return true;
  }

  return false;
}

function highestIndexVal(array) {
  
  // sorted array
  let sortedArray = array.sort(function(a, b){return a - b});

  return sortedArray[0];
}

function lowestIndexVal(array) {
  
  // sorted array
  let sortedArray = array.sort(function(a, b){return b - a});

  return sortedArray[0];
}

function biggestWordArray(array) {

  let lengthToCompare = 0;
  let biggestWord = '';

  for (let index = 0; index < array.length; index += 1) {

    // NOTE: if you have multiple words in a array that are the same size, the function will stop at the first match.
    if (array[ index ].length > lengthToCompare) {
      lengthToCompare = array[ index ].length;
      biggestWord = array[ index ];
    }
  }

  return biggestWord;
}

function arrayItemWhoAppearsMost(array) {

  let frequency = 1;
  let frequencyToCompare = 0;
  let result = 0;

  for (let index1 = 0; index1 < array.length; index1 += 1) {

    for (let index2 = 0; index2 < array.length; index2 += 1) {

      if (array[index1] === array[index2]) {
        frequencyToCompare += 1;
      }

      if (frequency <= frequencyToCompare) {
        frequency = frequencyToCompare;
        result = array[index1];
      }

    }

    // reset frequency
    frequencyToCompare = 0; 
  }

  return result;

}

function numStackCount(number) {

  let sum = 0;

  for (let index = 1; index <= number; index += 1) {
    sum += index;
  }

  return sum;
}

function stringSplitCheck(string1, string2) {

  if (string1.endsWith(string2)) {
    return true;
  }
  
  return false;
}


(function main() {

  // 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
  console.log('is not a palindrome', isPalidrome('ayylmao'));
  console.log('is a palindrome', isPalidrome('arara'));

  // 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
  let testArray1 = [ 2, 5, 30, 1, -5 ];
  console.log('index with highest value:', highestIndexVal(testArray1));

  // 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
  let testArray2 = [ 20, 10, 30, 40, 4 ];
  console.log('index with lowest value:', lowestIndexVal(testArray2));

  // 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
  let testArray3 = ['apple', 'lemon', 'banana', 'ice' ];
  console.log('biggest word', biggestWordArray(testArray3));

  // 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
  let testArray4 = [ 2, 2, 1, 1, 1, 1, 1, 1, 3, 4, 4, 4, 5 ];
  console.log('array item that most appears is:', arrayItemWhoAppearsMost(testArray4));
  
  // 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
  let number = 10;
  console.log('stack count', numStackCount(number));

  // 7 - Crie uma função que receba uma string word e outra string ending. 
  // Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
  console.log(stringSplitCheck('github', 'ub'), '| string ends with');
  console.log(stringSplitCheck('github', 'it'), '| string doesnt end with');

})()

