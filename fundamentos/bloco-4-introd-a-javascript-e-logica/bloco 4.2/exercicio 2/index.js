/*
*/

(function main() {

 // Utilize o for para imprimir os elementos da lista groceryList com o console.log():
 let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

 for (i = 0; i < groceryList.length; i += 1) {
  console.log(groceryList[i]);
 }

 // Utilize o for/of para imprimir os elementos da lista names com o console.log():
 let names = ['João', 'Maria', 'Antônio', 'Margarida'];

 for (let i of names) {
  console.log(i);
 }

})();
