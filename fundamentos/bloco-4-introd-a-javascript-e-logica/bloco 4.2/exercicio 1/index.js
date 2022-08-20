/*
*/

(function main() {

  // Obtenha o valor "Serviços" do array menu:
  let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
  let menuServices = menu[1];

  console.log('menuServices:', menuServices);

  // Procure o índice do valor "Portfólio" do array menu:
  let indexOfPortfolio = menu.indexOf('Portfólio');
  console.log('indexofProtfolio:', indexOfPortfolio);

  // Adicione o valor "Contato" no final do array menu:
  menu.push('Contato');
  console.log(menu);

  // Bonus: adicione o valor ^Fechar^ no começo do array menu:
  menu.unshift('Fechar');
  console.log(menu);

})();
