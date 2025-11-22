// Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;

for (index = 0; index < numbers.length; index += 1) {
  total += numbers[index];
};

let mediaAritmetica = total / numbers.length;
console.log(mediaAritmetica);