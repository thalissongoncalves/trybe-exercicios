const readline = require("readline-sync");

const imc = () => {
  const peso = readline.questionInt("What's your weight? ");
  const altura = readline.questionFloat("What's your height? (Ex: 1.8) = ");
  const imcValue = peso / altura ** 2;
  if (imcValue < 18.5) {
    return `IMC: ${imcValue} | Situação: Abaixo do peso (magreza).`;
  } else if (imcValue >= 18.5 && imcValue <= 24.9) {
    return `IMC: ${imcValue} | Situação: Peso normal.`;
  } else if (imcValue >= 25 && imcValue <= 29.9) {
    return `IMC: ${imcValue} | Situação: Acima do peso (sobrepeso).`;
  } else if (imcValue >= 30 && imcValue <= 34.9) {
    return `IMC: ${imcValue} | Situação: Obesidade grau I.`;
  } else if (imcValue >= 35 && imcValue <= 39.9) {
    return `IMC: ${imcValue} | Situação: Obesidade grau II.`;
  } else {
    return `IMC: ${imcValue} | Situação: Obesidade grau III e IV.`;
  }
};

console.log(imc());
