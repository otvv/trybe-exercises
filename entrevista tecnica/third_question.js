'use strict'

(function main() {
    
  const phrase = 'Hello World'
  const letter = 'l'
    
  // explicação:
  //
  //
  // "phrase" seria a frase que a pessoa quer contar as letras
  //
  // "split" é a função que vai dividir essa frase em um array (ela retorna um novo array)
  // leva o argumento "letter" que seria a letra que eu quero "contar" e vai popular o array só com isso
  //
  // "letter" seria o denominador
  //
  // "lenght" seria o tamanho do array menos 1 caractere que no fim da string seria algo nulo (em branco) \0
  // 
  //
  // EXPLICAÇÃO: as strings são arrays de uma dimensão de caracteres que terminam por um charactere nulo '\0'.
  console.log((phrase.split(letter).length - 1))

})()