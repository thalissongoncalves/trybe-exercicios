const stockProducts = require('./data.json');

// 9 - Crie uma função que retorne todos os produtos com informações sobre alergia ou intolerância
const getProductsWithAllergyOrIntoleranceInfo = () => {
  const allergyOrIntoleranceList = [];

  for (index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].allergyOrIntolerance) {
      const description = stockProducts[index].description;
      const price = `R$ ${stockProducts[index].price}`;
      const allergy = stockProducts[index].allergyOrIntolerance.join(' ');
      allergyOrIntoleranceList.push({
        description: description,
        formattedPrice: price,
        allergyOrIntoleranceMessage: `Pode conter: ${allergy}`,
      });
    } else {
      const description = stockProducts[index].description;
      const price = `R$ ${stockProducts[index].price}`;
      allergyOrIntoleranceList.push({
        description: description,
        formattedPrice: price,
      });
    }
  }

  console.log(allergyOrIntoleranceList);
  return allergyOrIntoleranceList;
};
getProductsWithAllergyOrIntoleranceInfo();

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
