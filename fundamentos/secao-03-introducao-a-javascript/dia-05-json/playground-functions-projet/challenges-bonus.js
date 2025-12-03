// Desafio 11 - Crie a função generatePhoneNumber
const generatePhoneNumber = (phoneNumber) => {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (index = 0; index < phoneNumber.length; index += 1) {
      let contagem = 0;
      let valorVerificar = phoneNumber[index];

      for (index2 = 0; index2 < phoneNumber.length; index2 += 1) {
        if (phoneNumber[index2] === valorVerificar) {
          contagem += 1;
        }

        if (contagem >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }

      if (phoneNumber[index] < 0 || phoneNumber[index] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }

    return `(${phoneNumber[0]}${phoneNumber[1]}) ${phoneNumber[2]}${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}${phoneNumber[6]}-${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`;
  }
};

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12 -  Crie a função triangleCheck
const triangleCheck = (lineA, lineB, lineC) => {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < lineC + lineA && lineB > Math.abs(lineC - lineA)) {
    return true;
  } else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  } else if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  } else {
    return false;
  }
}
console.log(triangleCheck(10, 14, 8))

// Desafio 13 - Crie a função hydrate
const hydrate = (string) => {
  const integerStrings = string.match(/\d+/g);
  const integers = integerStrings ? integerStrings.map(Number) : [];
  let sumWaters = 0;
  for (index = 0; index < integers.length; index += 1) {
    sumWaters += integers[index];
  };
  let result = sumWaters > 1 ? `${sumWaters} copos de água` : `${sumWaters} copo de água`;
  return result;
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'))