// Por meio do array de frutas chamado basket, crie um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor.

// Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'] deverá retornar:
// {
//   Melancia: 3,
//   Abacate: 1,
//   Uva: 1
// }

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates....

// O array basket a ser utilizado:
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const cesta = {};

for (index = 0; index < basket.length; index += 1) {
  Object.keys(cesta).includes(basket[index]) ? cesta[`${basket[index]}`] += 1 : cesta[`${basket[index]}`] = 1;
}

const cestaArray = Object.entries(cesta);
let fruitsQuantity = "";

for (index = 0; index < cestaArray.length; index += 1) {
  if (index != cestaArray.length - 1) {
    fruitsQuantity += `${cestaArray[index][1]} ${cestaArray[index][0]}, `;
  } else {
    fruitsQuantity += `${cestaArray[index][1]} ${cestaArray[index][0]}.`;
  }
};

console.log(`Sua cesta possui: ${fruitsQuantity}`);