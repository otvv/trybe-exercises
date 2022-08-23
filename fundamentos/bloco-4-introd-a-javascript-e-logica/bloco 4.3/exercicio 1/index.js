
(function main() {

  // 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
  // Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
  const factorialTarget = 10;
  let result = 1;

  for (let i = 2; i <= factorialTarget; i += 1) {
    result = (result * i);
  }

  console.log('factorial of 10:', result);

  // 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". 
  // Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
  const wordToReverse = "AyyLmao";
  const wordToSplit = wordToReverse.split('');
  const wordReversed = wordToSplit.reverse();
  const wordSplitted = wordReversed.join('');

  console.log(wordToReverse, '-', wordSplitted)

  // 3- Considere o array de strings abaixo:
  // Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
  let array = [ 'java', 'javascript', 'python', 'html', 'css' ]

  const sortedArray = array.sort();
  console.log('smallest word:', sortedArray[0]);
  console.log('biggest word:', sortedArray[(sortedArray.length - 2)]);

  // 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. 
  // Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
  let sum = 0;
  for (let i = 2; i <= 50; i += 1) {

    let isPrimal = true;

    for (let j = 2; j < i; j += 1) {

      if (i % j === 0) {
        isPrimal = false;
      }
    }

    if (isPrimal) {
      sum = i;
    }
  }
  
  console.log(sum)

})();
