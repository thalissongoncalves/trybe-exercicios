// Exercício 01
// 🚀 Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.

// 🚀 Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.

// Copie o código abaixo e rode-o para verificar sua saída:

// function imprimeIdade() {
//     for (let idade = 30; idade <= 40; idade += 1) {
//       console.log('Idade dentro do for:', idade)
//     }
    
//   }
//   imprimeIdade()

// Exercício 02

// 🚀 Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;
// Copie o código abaixo e rode-o para verificar sua saída:

//   const pessoa = {
//     nome: 'Henri',
//     idade: 20
//   }
//   pessoa.nome = {
//     nome: 'Luna'
//   }
//   pessoa.idade = {
//     idade: 19
//   } 
//   console.log('Nome:', pessoa.nome);
//   console.log('Idade:', pessoa.idade);

// Exercício 03

// 🚀 Modifique a variável para que não ocorra Erro;
// Copie o código abaixo e rode-o para verificar sua saída:

// const favoriteFood = {comida: 'Lasanha'};
// favoriteFood.comida = 'Hamburguer';
// console.log('Comida Favorita:', favoriteFood.comida);

// Exercício 04

// Modifique as concatenações para template literals.

// Copie o código abaixo:

const name = 'Adriana';
const lastName = 'Soares';
console.log('Olá' + ',' + name + ' ' + lastName + '!');
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);