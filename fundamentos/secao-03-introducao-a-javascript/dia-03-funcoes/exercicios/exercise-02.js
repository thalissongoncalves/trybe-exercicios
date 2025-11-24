// 2 - Crie a função circleArea, que calcule a área de um círculo.
const circleArea = (raio) => {
  if (typeof raio != "number") {
    return 'O parâmetro radius deve ser um número';
  } else {
    const pi = 3.14;
    const area = raio ** 2 * pi;
    return `Essa é a área do círculo: ${area}`;
  }
};