const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const liElements = document.querySelectorAll('li');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function addClassToElement(event) {
  event.target.className = 'tech';
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function changeTechElementText(event) {
  firstLi.innerText = 'CSS';
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
function redirectOnDblClick() {
  window.open('https://github.com/otvv', '_blank');
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function changeColorOnHover(event) {
  event.target.style.cursor = 'pointer'
  event.target.style.color = '#2fc18c';
}

for (let i = 0; i < 3; i += 1) {
  liElements[i].addEventListener('click', addClassToElement);
}
input.addEventListener('keyup', changeTechElementText);
myWebpage.addEventListener('mouseover', changeColorOnHover);
myWebpage.addEventListener('dblclick', redirectOnDblClick);
