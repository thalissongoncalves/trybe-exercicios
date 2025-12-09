const stockProducts = require('./data.json');

// 3 - Crie uma função que retorne os nomes dos produtos indisponíveis do estoque
const getOutOfStockProducts = () => {
  const productsOutOfStock = [];

  for (index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock === 0) {
      productsOutOfStock.push(stockProducts[index].productName);
    }
  }

  return productsOutOfStock;
};

module.exports = { getOutOfStockProducts };
