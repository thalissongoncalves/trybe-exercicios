const stockProducts = require('./data.json');

// 5 - Crie uma função que retorne o total de produtos em estoque
const getProductsAmount = () => {
  let total = 0;

  for (index = 0; index < stockProducts.length; index += 1) {
    total += stockProducts[index].quantityInStock
  };

  return total;
};

module.exports = { getProductsAmount };
