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

const authorBornIn1947 = (arr) => arr.find((book) => book.author.birthYear === 1947).author.name;
console.log(authorBornIn1947(books));

///

const smallestBookName = (arr) => {
  const bookName = [];
  arr.forEach((element) => bookName.push(element.name));
  const smallestBook = bookName.reduce((a, b) => a.length <= b.length ? a : b)
  return smallestBook;
}
console.log(smallestBookName(books));

///

const getNamedBook = (arr) => {
  const bookName = [];
  arr.forEach((element) => bookName.push(element.name));
  return (bookName.find((book) => book.length === 26));
}
console.log(getNamedBook(books));

///

const booksOrderedByReleaseYearDescres = (arr) => arr.sort((a, b) => (a.releaseYear < b.releaseYear ? 1 : -1));
console.log(booksOrderedByReleaseYearDescres(books));

///

const everyoneWasBornOnSecXX = (arr) => arr.every((element) => element.author.birthYear >= 2000);
console.log(everyoneWasBornOnSecXX(books));

///

const someBookWasReleaseOnThe80s = (arr) => arr.some((element) => ((element.releaseYear >= 1980) && (element.releaseYear <= 1989)));
console.log(someBookWasReleaseOnThe80s(books));
