/*
*/

const numbers = [19, 21, 30, 3, 45, 22, 15];
const findDivisibleBy3And5 = (array) => array.find((number) => (number % 3 === 0) && (number % 5 === 0));
console.log(findDivisibleBy3And5(numbers));

///

const names = ['João', 'Irene', 'Fernando', 'Maria'];
const findNameWithFiveLetters = (array) => array.find((name) => name.length === 5)
console.log(findNameWithFiveLetters(names));

///

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];
const findMusic = (array, id) => array.find((music) => music.id === id).title;
console.log(findMusic(musicas, '31031685'));