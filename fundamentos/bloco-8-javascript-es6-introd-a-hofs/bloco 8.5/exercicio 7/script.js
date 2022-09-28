/*
*/

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
    // bornIn: nascido em
];

const filterPeople = (arr) => {

  // filter object array for australian people
  const filteredPeople = arr.filter((people) => people.nationality === 'Australian');

  // destructure filtered array;
  const [ {name, bornIn} ] = filteredPeople;
  
  return `
  ${name} nascido(a) em: ${bornIn}.`
}
console.log(filterPeople(people));
