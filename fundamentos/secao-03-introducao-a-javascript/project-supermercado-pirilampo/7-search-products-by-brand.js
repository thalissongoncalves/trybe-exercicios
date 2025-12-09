const stockProducts = require('./data.json');

// 7 - Crie uma função que busque por produtos de uma marca específica
const searchProductsByBrand = (brand) => {
  const brandList = [];

  for (index = 0; index < stockProducts.length; index += 1) {  
    if (stockProducts[index].brand === brand) {
      const description = stockProducts[index].description;
      const price = `R$ ${stockProducts[index].price}`;
      brandList.push({
        description: description,
        formattedPrice: price,
      });
    }
  };

  if (!brand) {
    return [];
  }

  return brandList;
};

module.exports = { searchProductsByBrand };
