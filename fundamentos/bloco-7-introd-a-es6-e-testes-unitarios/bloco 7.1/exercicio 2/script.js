/*
*/

const longestWord = (string) => { 
  const splittedString = string.split(' ');
  const sortedArray = splittedString.sort((a, b) => {return b.length - a.length})[0];
  return console.log(sortedArray);
} 

longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu');
