/*
*/

(function main() {

  const pointsAquired = 57;
  let convertedGrade = null;

  if (pointsAquired >= 90) {
    convertedGrade = 'A';
  }
  else if (pointsAquired >= 80) {
    convertedGrade = 'B';
  }
  else if (pointsAquired >= 70) {
    convertedGrade = 'C';
  }
  else if (pointsAquired >= 60) {
    convertedGrade = 'E';
  }
  else if (pointsAquired >= 50) {
    convertedGrade = 'F';
  }
  else if (pointsAquired >= 100 || pointsAquired <= 0) {
    convertedGrade = null;
    
    console.error('invalid grade')
  }

  console.log('converted grade:', convertedGrade)

})();