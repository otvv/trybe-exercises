/*
*/

(function main() {

  const parameter1 = 'positive'
  const parameter2 = 'negative'

  if (parameter1 === 'positive') {
    console.log('positive');
  }
  else if (parameter1 === 'negative') {
    console.log('negative');
  }
  else {
    console.log('zero');
  }

  //

  switch (parameter2) {
    case 'positive':
    console.log('positive');
      break;
    case 'negative':
    console.log('negative');
      break;
    default:
    console.log('zero');
      break;
  }

})();