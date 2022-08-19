/*
*/

(function main() {

  const candidateScore = 88;

  if (candidateScore >= 80) {
    console.log('Congratulations, you\'ve passed the test!')
  }
  else if ((candidateScore < 80 && candidateScore >= 60)) {
    console.log('You are on our waiting list.')
  }
  else {
    console.log('Sorry, you didn\'t pass the test. Try again next time!')
  }

})();