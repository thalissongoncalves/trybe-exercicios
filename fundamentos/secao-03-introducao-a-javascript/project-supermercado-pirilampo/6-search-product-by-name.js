const stockProducts = require('./data.json');

// 6 - Crie uma função que busque um produto pelo nome
const searchProductByName = (nameProduct) => {
  for (index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].productName === nameProduct) {
      const description = stockProducts[index].description;
      const price = `R$ ${stockProducts[index].price}`;
      return {
        description: description,
        formattedPrice: price,
      };
    }
  }

  return null;
};

module.exports = { searchProductByName };
