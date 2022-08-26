// 1 Acesse o elemento elementoOndeVoceEsta.
const elementWhereYouAre = document.getElementById('elementoOndeVoceEsta');

// 2 Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const parentElementWhereYouAre = elementWhereYouAre.parentElement;
parentElementWhereYouAre.style.backgroundColor = 'red';

// 3 Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
const firstChildFromChild = document.getElementById('primeiroFilhoDoFilho');
firstChildFromChild.innerText = 'This is a text.';

// 4 Acesse o primeiroFilho a partir de pai.
const firstChild = document.getElementById('pai').firstChild;

// 5 Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(elementWhereYouAre.previousElementSibling);

// 6 Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(elementWhereYouAre.lastElementChild.parentNode.nextSibling);

// 7 Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(elementWhereYouAre.nextElementSibling);

// 8 Agora acesse o terceiroFilho a partir de pai.
const parentElement = elementWhereYouAre.parentElement;
console.log(parentElement.firstElementChild.nextElementSibling.nextElementSibling);
