/*
*/

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const employeeInfo = { ...user, ...jobInfos };

const pitch = ({name, age, nationality, profession, squadInitials, squad}) => {
  return `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squad} or ${squadInitials} for short.`;
}
console.log(pitch(employeeInfo));
