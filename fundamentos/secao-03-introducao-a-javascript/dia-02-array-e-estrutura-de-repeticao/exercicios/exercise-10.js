// Desafio da pirâmide de asteriscos
// Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

n = 5;

for (index = 1; index <= n; index += 1) {
  console.log("*".repeat(index));
}