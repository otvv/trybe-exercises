/*
*/

const substituaX = (nome) => {

  const frase = 'Tryber x aqui!';

  const fraseDividida = frase.split((' '));
  fraseDividida[1] = nome;
  const arrayJuntado = fraseDividida.join(' ');
  return arrayJuntado;
}

const minhasSkills = (tryber) => {
  
  const skills = ['HTML', 'CSS', 'JavaScript'];

  let concatenedString = `${tryber} Minhas três principais habilidades são: ${skills}`

  return console.log(concatenedString);
}

minhasSkills(substituaX('Otavio'))