/*
*/

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const initialString = ''; /* ghetto undefined fix */
const reduceNames = (arr) => arr.reduce((acc, book) => (`${acc + book.author.name}, `), initialString);
console.log(reduceNames(books));

///

const averageAge = (arr) => arr.reduce((acc, book) => {
  
  const bookShelfSize = arr.length;
  const authorAgeAtBookRelease = (book.releaseYear - book.author.birthYear);
  const averageAuthorsAgeAtRelease = (Number(acc) + authorAgeAtBookRelease / bookShelfSize);
  
  return Math.round(averageAuthorsAgeAtRelease);
}, 0);
console.log(averageAge(books));

///

// we can also use sort as an alternative to this
// the principle is the same as using: arr.sort((a, b) => a.name.length - b.name.length) 
const longestNamedBook = (arr) => arr.reduce((acc, book) => (acc.name.length > book.name.length) ? acc : book);
console.log(longestNamedBook(books));

///

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsAXTimes = (arr) => arr.reduce((acc, name) => (acc + name.match(/a/gi).length), 0);
console.log(containsAXTimes(names));
