const stockProducts = require('./data.json');

// 4 - Crie uma função que retorne os produtos com baixo estoque em um formato específico
const getLowStockProducts = () => {
  const productsLowStock = [];

  for (index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock > 0 && stockProducts[index].quantityInStock <= 10) {
      let productName = stockProducts[index].productName;
      let stock = stockProducts[index].quantityInStock;
      productsLowStock.push(`${productName}: ${stock} unidades`);
    }
  }

  return productsLowStock
};

module.exports = { getLowStockProducts };
