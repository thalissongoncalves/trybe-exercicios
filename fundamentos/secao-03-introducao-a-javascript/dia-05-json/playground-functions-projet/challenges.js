// Desafio 1 - Crie a função compareTrue
const compareTrue = (boolean1, boolean2) =>
  boolean1 && boolean2 ? true : false;

// Desafio 2 - Crie a função splitSentence
const splitSentence = (string) => string.split(' ');

// Desafio 3 - Crie a função concatName
const concatName = (arrayStr) =>
  `${arrayStr[arrayStr.length - 1]}, ${arrayStr[0]}`;

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => (wins * 3) + (ties * 1);

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

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;

const calcRectangleArea = (base, height) => base * height;

const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(
      base,
      height
    )}`;
  } else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(
      base,
      height
    )}`;
  } else {
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
};

// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  let gato01 = Math.abs(mouse - cat1);
  let gato02 = Math.abs(mouse - cat2);

  if (gato01 < gato02) {
    return 'cat1';
  } else if (gato01 > gato02) {
    return 'cat2';
  } else if (gato01 === gato02) {
    return 'os gatos trombam e o rato foge';
  }
};

// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (array) => {
  const arrayResult = [];

  for (index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayResult.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      arrayResult.push('fizz');
    } else if (array[index] % 5 === 0) {
      arrayResult.push('buzz');
    } else {
      arrayResult.push('bug!');
    }
  }

  return arrayResult;
};

// Desafio 9 - Crie a função encode e a função decode
const encode = (string) => {
  let encodeResult = [];
  for (index = 0; index < string.length; index += 1) {
    if (string[index].toLowerCase() === 'a') {
      let aLetter = (string[index] = 1);
      encodeResult.push(aLetter);
    } else if (string[index].toLowerCase() === 'e') {
      let eLetter = (string[index] = 2);
      encodeResult.push(eLetter);
    } else if (string[index].toLowerCase() === 'i') {
      let iLetter = (string[index] = 3);
      encodeResult.push(iLetter);
    } else if (string[index].toLowerCase() === 'o') {
      let oLetter = (string[index] = 4);
      encodeResult.push(oLetter);
    } else if (string[index].toLowerCase() === 'u') {
      let uLetter = (string[index] = 5);
      encodeResult.push(uLetter);
    } else {
      encodeResult.push(string[index]);
    }
  }

  return encodeResult.join("");
};

const decode = (string) => {
  let decodeResult = [];
  for (index = 0; index < string.length; index += 1) {
    if (string[index] === "1") {
      let numberOne = (string[index] = 'a');
      decodeResult.push(numberOne);
    } else if (string[index] === "2") {
      let numberTwo = (string[index] = 'e');
      decodeResult.push(numberTwo);
    } else if (string[index] === "3") {
      let numberThree = (string[index] = 'i');
      decodeResult.push(numberThree);
    } else if (string[index] === "4") {
      let numberFour = (string[index] = 'o');
      decodeResult.push(numberFour);
    } else if (string[index] === "5") {
      let numberFive = (string[index] = 'u');
      decodeResult.push(numberFive);
    } else {
      decodeResult.push(string[index]);
    }
  }

  return decodeResult.join("");
};

// Desafio 10 - Crie a função techList
const techList = (array, string) => {
  const techArray = [];

  if (!array && !string) {
    return []
  } else {
    for (index = 0; index < array.length; index += 1) {
      techArray.push({
        tech: array[index],
        name: string
      })
    }
    
    techArray.sort((a, b) => {
      const techA = a.tech;
      const techB = b.tech;

      return techA.localeCompare(techB);
    });

    return techArray;
  }
}