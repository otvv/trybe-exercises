/*
*/

(function main() {

  const number1 = 3
  const number2 = 4
  const number3 = 6

  if (((number1 || number2 || number3) % 2) == 1) {
    console.log('one of these numbers is odd');
  }
  else {
    console.log('one of these numbers is even');
  }

})();