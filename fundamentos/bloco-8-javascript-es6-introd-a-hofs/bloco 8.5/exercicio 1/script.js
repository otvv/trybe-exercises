/*
*/

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Kiwi', 'Banana', 'Abacate'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Laranja', 'Morango', 'Uva'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};
console.log(fruitSalad(specialFruit, additionalItens));
