/*
*/

const saudacoes = [ 'Olá', (saudacao) => console.log(saudacao) ];
const [ greeting ] = saudacoes;
console.log(greeting);

///

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// organized array
const [ pet, drink, food ] = [ comida, animal, bebida ];

console.log('pet:', pet);
console.log('drink:', drink);
console.log('food:', food);

///

const numerosPares = [1, 3, 5, 6, 8, 10, 12];

// filtered numbers and alternative solution
const [six, eigth, ten, twelve] = numerosPares.filter((number) => number % 2 === 0);
//const [one, three, five, six, eigth, ten, twelve] = numerosPares;

console.log(six, eigth, ten, twelve);

