/*
*/

(function main() {

  const currentHour = 15;

  let message = ''

  if (currentHour >= 22) {
    message = 'We shouldn\'t be eating anything. It\'s bed time!'
  }
  else if ((currentHour >= 18 && currentHour < 22)) {
    message = 'Night snack, lets eat!'
  }
  else if ((currentHour >= 14 && currentHour < 18)) {
    message = 'Should we get a chocolate cake for brunch?'
  }
  else if ((currentHour >= 11 && currentHour <= 14)) {
    message = 'Lunch time!'
  }
  else if ((currentHour >= 4 && currentHour <= 11)) {
    message = 'Hmmm, I smell bacon!'
  }

  console.log(message)

})();