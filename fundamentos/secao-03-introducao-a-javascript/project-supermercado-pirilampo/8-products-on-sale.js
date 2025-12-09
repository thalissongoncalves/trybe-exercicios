const stockProducts = require('./data.json');

// 8 - Crie uma função que busque por produtos na promoção
const getProductsOnSale = () => {
  const onSaleProducts = [];

  for (index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].onSale === true) {
      const description = stockProducts[index].description;
      const price = `R$ ${stockProducts[index].price}`;
      const onSale = stockProducts[index].onSale;
      onSaleProducts.push({
        description: description,
        formattedPrice: price,
        onSale: onSale,
      });
    }
  }

  return onSaleProducts;
};

module.exports = { getProductsOnSale };
