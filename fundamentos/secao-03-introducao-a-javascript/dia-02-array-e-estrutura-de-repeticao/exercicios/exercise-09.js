// Desafio dos asteriscos
// Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

n = 10

if (n > 1) {
  for (index = 1; index <= n; index += 1) {
    console.log("*".repeat(n))
  }
}
