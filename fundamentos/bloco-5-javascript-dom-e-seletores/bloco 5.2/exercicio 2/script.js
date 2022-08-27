// 1 Crie um irmão para elementoOndeVoceEsta.
const parentElement = document.getElementById('pai');
const newElement = document.createElement('section');
parentElement.appendChild(newElement);

// 2 Crie um filho para elementoOndeVoceEsta.
const elementWhereYouAre = document.getElementById('elementoOndeVoceEsta');
const newChildElement = document.createElement('h2');
elementWhereYouAre.appendChild(newChildElement);

// 3 Crie um filho para primeiroFilhoDoFilho.
const childFromElementWhereYouAre = document.getElementById('primeiroFilhoDoFilho');
const newChildChildElement = document.createElement('h3');
childFromElementWhereYouAre.appendChild(newChildChildElement);

// 4 A partir desse filho criado, acesse terceiroFilho.
console.log(childFromElementWhereYouAre.parentElement.parentElement.childNodes[5]);
