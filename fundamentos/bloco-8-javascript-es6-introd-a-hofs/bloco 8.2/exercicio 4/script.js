/*
*/

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
const sortPeopleDecres = (arr) => arr.sort((a, b) => (a.name > b.name ? 1 : -1));
const sortPeopleCresc = (arr) => arr.sort((a, b) => (a.name < b.name ? 1 : -1));
console.log(sortPeopleDecres(people));
console.log(sortPeopleCresc(people));
