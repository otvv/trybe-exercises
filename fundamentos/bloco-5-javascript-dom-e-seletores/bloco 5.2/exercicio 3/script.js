// 1 Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
const parentParentElement = document.getElementById('paiDoPai');
const firstChildElement = document.getElementById('primeiroFilho');
const elementWhereYouAre = document.getElementById('elementoOndeVoceEsta');
const thirdChildElement = document.getElementById('terceiroFilho');
const fourthChildElement = document.getElementById('quartoEUltimoFilho');

firstChildElement.remove();
elementWhereYouAre.removeChild(elementWhereYouAre.lastElementChild);
thirdChildElement.remove();
fourthChildElement.remove();
