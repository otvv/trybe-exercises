/*
*/

(function main() {

  let candidateState = ''

  switch (candidateState) {
    case 'aproved':
      console.log('Congratulations, you\'ve passed the test!')
      break;
    case 'list':
      console.log('You are on our waiting list.')
      break;
    case 'reproved':
      console.log('Sorry, you didn\'t pass the test. Try again next time!')
      break;
    default:
      console.log('N\\A')
      break;
  }

})();