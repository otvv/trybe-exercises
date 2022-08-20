/*
*/

(function main() {

  let numbers = [ 5, 9, 3, 19, 70, 8, 100, 2, 35, 27 ];
  let numberSum = [];
  let count = null;
  let highestVal = 0;
  let lowestVal = numbers[0];
  let emptyArray = [];
  let resultDivision = null;

  // percorra o array imprimindo todos os valores nele contidos com a função console.log();
  for (num of numbers) {
    console.log('number:', num);

    // some todos os valores contidos no array e imprima o resultado;
    console.log('number + number:', (num + num));
  }

  //calcule e imprima a média aritmética dos valores contidos no array;
  for (let i = 0; i < numbers.length; i += 1) {
    numberSum = (count += numbers[i]);
    ((numberSum / numbers.length) >= 20) ? console.log('valor maior que 20') : console.log('valor menor ou igual a 20')
    console.log((numberSum / numbers.length));
  }

  // 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
  for (let i = 0; i < numbers.length; i += 1) {

    if (numbers[i] > highestVal) {
     highestVal = numbers[i];
    }
  }

  console.log(highestVal);

  // alternative
  console.log(Math.max.apply(Math.max, numbers));

  // Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
  for (num of numbers) {
    if ((num % 2) == 1) {
     console.log('impar:', num);
    }
    else {
     console.log('nenhum numero impar encontrado');
    }
  }

  // Utilizando for, descubra qual o menor valor contido no array e imprima-o;
  for (let i = 0; i < numbers.length; i += 1) {

    if (numbers[i] < lowestVal) {
      lowestVal = numbers[i];
    }
  }
  
  console.log(lowestVal);

  // alternative
  console.log(Math.min.apply(Math.min, numbers));

  // Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
  for (let i = 0; emptyArray.length <= 25; i += 1) {
    emptyArray[i] = i;
    console.log(emptyArray[i]);
  }

  // Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
  for (let i = 0; emptyArray.length <= 25; i += 1) {
    emptyArray[i] = i;

    resultDivision = (emptyArray[i] / 2);
    console.log(resultDivision)
  }

})();
