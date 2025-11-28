// Desafio 1 - Crie a função compareTrue
const compareTrue = (boolean1, boolean2) =>
  boolean1 && boolean2 ? true : false;
console.log(compareTrue(true, true));

// Desafio 2 - Crie a função splitSentence
const splitSentence = (string) => string.split(' ');
console.log(splitSentence('go Trybe'));

// Desafio 3 - Crie a função concatName
const concatName = (arrayStr) =>
  `${arrayStr[arrayStr.length - 1]}, ${arrayStr[0]}`;
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => (wins * 3) + (ties * 1);
console.log(footballPoints(14, 8));

// Desafio 5 - Crie a função highestCount
const highestCount = (array) => {
  let maior = array[0];
  let contagem = 0;

  for (index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index]
      contagem = 1
    } else {
      if (array[index] === maior) contagem += 1;
    }
  }

  return contagem;
};
console.log(highestCount([9, 1, 2, 3, 4, 9, 5]))

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList