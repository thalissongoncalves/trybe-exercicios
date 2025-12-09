const stockProducts = require('./data.json');

// 10 - Crie uma função que retorne todos os produtos que possuam alguma vitamina em seu valor nutricional
const getProductsRichInVitamin = () => {
  const productsVitamins = [];

  for (index = 0; index < stockProducts.length; index += 1) {
    const description = stockProducts[index].description;
    const price = `R$ ${stockProducts[index].price}`;
    const vitamins = stockProducts[index].nutritionalInfo.vitamins;
    if (vitamins) {
      let vitaminsArray = [];
      for (let [key, value] of Object.entries(vitamins)) {
        vitaminsArray.push(key + " - " + value);
      }
      productsVitamins.push({
        description: description,
        formattedPrice: price,
        vitaminsInformation: vitaminsArray,
      });
    }
  }

  return productsVitamins;
};

module.exports = { getProductsRichInVitamin };
