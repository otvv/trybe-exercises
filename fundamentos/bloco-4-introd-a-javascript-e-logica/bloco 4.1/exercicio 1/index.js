/*
*/

(function main() {

  const myName = "Otavio"
  const birthCity = "Belo Horizonte"
  let birthYear = 1999

  console.log("myName:", myName)
  console.log("birthCity:", birthCity)
  console.log("birthYear:", birthYear)

  birthYear = 2030;
  console.log("new birthYear:", birthYear)

  birthCity = "Sao Paulo" // this will trigger an error, because we are trying to assign a new value to a constant variable
  console.log(birthCity)

})();