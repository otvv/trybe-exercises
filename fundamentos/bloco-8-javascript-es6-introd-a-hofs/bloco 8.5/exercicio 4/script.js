/*
*/

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const { nacionalidade = 'Brazilian' } = person;

console.log(getNationality(otherPerson)); // output: Ivan is Russian
console.log(getNationality(person)); // expected output: Joao is Brazilian
