/*
*/

(function main() {

  const varA = 22;
  const varB = 10;

  console.log('sum:', (varA + varB));
  console.log('subtraction:', (varA - varB));
  console.log('multiplication:', (varA * varB));
  console.log('division:', (varA / varB));

  if (((varA + varB) % 2) == 0) {
    console.log('even')
  }
  else {
    console.log('not even')
  }
})();