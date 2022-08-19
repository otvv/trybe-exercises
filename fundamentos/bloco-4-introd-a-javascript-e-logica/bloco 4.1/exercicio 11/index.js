/*
*/

(function main() {

  const productCostPrice = 200;
  const productCostTax = 20;
  const productSalePrice = 1000;
  const amountSold = 1000
  const productCostTotal = (productCostPrice + productCostTax);
  const profitMargin = (productSalePrice - productCostTotal)

  console.log('amount of profit if 1k products where sold:', (profitMargin * amountSold), '$')

  if (profitMargin <= 0 || productCostPrice <= 0 || productCostTotal <= 0 || productSalePrice <= 0 || productCostTax <= 0) {
    console.error('invalid product!');
  }
})();