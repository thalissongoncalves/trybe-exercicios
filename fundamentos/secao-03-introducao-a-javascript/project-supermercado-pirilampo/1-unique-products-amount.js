const stockProducts = require('./data.json');

// 1 - Crie uma função que retorne a quantidade de produtos únicos em estoque
const getUniqueProductsAmount = () => {
  return stockProducts.length;
};
getUniqueProductsAmount();

module.exports = { getUniqueProductsAmount };