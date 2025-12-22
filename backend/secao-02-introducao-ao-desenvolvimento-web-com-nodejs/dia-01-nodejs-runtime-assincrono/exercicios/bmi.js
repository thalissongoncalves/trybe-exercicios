const readline = require("readline-sync");

const imc = () => {
  const peso = readline.questionInt("What's your weight? ");
  const altura = readline.questionFloat("What's your height? (Ex: 1.8) = ");
  return peso / altura ** 2;
};

console.log(imc());
