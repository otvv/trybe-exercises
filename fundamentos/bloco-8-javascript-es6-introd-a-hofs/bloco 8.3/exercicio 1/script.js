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

const generateFormatedBookNames = (arr) => arr.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
//console.log(generateFormatedBookNames(books));

///

const generateAuthorArray = (arr) => arr.map((book) => {
  const bogusObject = {};
  bogusObject.age = (book.releaseYear - book.author.birthYear);
  bogusObject.name = book.author.name;
  return bogusObject;
}).sort((a, b) => (a.age - b.age));
//console.log(generateAuthorArray(books));

///

const filterBooks = (arr) => arr.filter((book) => (book.genre === 'Fantasia' || book.genre === 'Ficção Científica'));
//console.log(filterBooks(books));

///

const oldAFBooks = (arr) => arr.sort((a, b) => {
  return (a.releaseYear - b.releaseYear);
}).filter((book) => book.releaseYear <= (2022 - 60));
//console.log(oldAFBooks(books));

///

const fantasyOrScienceFictionAuthors = (arr) => arr.filter((book) => (book.genre === 'Fantasia') || (book.genre === 'Ficção Científica')).map((book) => {
  return book.author.name;
}).sort();
//console.log(fantasyOrScienceFictionAuthors(books));

const oldAFBooksName = (arr) => arr.sort((a, b) => {
  return (a.releaseYear - b.releaseYear);
}).filter((book) => book.releaseYear <= (2022 - 60)).map((book) => book.name);
//console.log(oldAFBooksName(books));

///

const authorWith3DotsOnName = (arr) => arr.filter((book) => book.author.name === 'J. R. R. Tolkien').map((book) => book.name);
console.log(authorWith3DotsOnName(books));



