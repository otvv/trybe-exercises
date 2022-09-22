/*
*/

const newEmployees = () => {
  const employees = {
    id1: 'Pedro Guerra', 
    id2: 'Luiza Drumond',
    id3: 'Carla Paiva'
  }
  return employees;
};

const generateEmployeeEmail = (callback) => {
  const arrEmployees = Object.values(callback());
  const generatedEmails = [];
  if (arrEmployees) {
    for (let employees of arrEmployees) {
      generatedEmails.push(`${employees.replace(' ', '_').toLowerCase()}@trybe.com`);
    }
    return generatedEmails;
  }
  return {};
}

console.log(generateEmployeeEmail(newEmployees));