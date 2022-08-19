/*
*/

(function main() {

  const number1 = 2
  const number2 = 3
  const number3 = 5

  if (((number1 || number2 || number3) % 2) == 0) {
    console.log('one of these numbers is even');
  }
  else {
    console.log('one of these numbers is odd');
  }

})();