const stockProducts = require('./data.json');

// 2 - Crie uma função que retorne os nomes dos produtos únicos em estoque
const getUniqueProductsName = () => {
  const productsList = [];

  for (index = 0; index < stockProducts.length; index += 1) {
    productsList.push(stockProducts[index].productName);
  }

  return productsList;
};

module.exports = { getUniqueProductsName };
