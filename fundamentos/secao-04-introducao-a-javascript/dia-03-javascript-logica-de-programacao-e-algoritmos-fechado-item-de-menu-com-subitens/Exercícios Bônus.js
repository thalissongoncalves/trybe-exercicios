// Exercício 01 - Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

// let n = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//     inputLine = inputLine + symbol;
// };
// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//     console.log(inputLine);
// };


// Exercício 02 - Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

// let n = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//     inputLine = inputLine + symbol;
//     console.log(inputLine);
// };

// Exercício 03 - Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

// let size = 5;
// let inputLine = '';
// let symbol = '*';
// let inputPosition = size;


// for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
//     for (let columnIndex = 0; columnIndex <= size; columnIndex += 1) {
//         if (columnIndex < inputPosition) {
//             inputLine = inputLine + ' ';
//         } else {
//             inputLine = inputLine + symbol;
//         }
//     }
//     console.log(inputLine);
//     inputLine = '';
//     inputPosition -= 1;
// };

// Exercício 04 - Depois, faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****

// let size = 5;
// let inputLine = '';
// let symbol = '*';
// let midOfMatrix = (size + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//     for (let columnIndex = 0; columnIndex <= size; columnIndex += 1) {
//         if (columnIndex > controlLeft && columnIndex < controlRight) {
//             inputLine = inputLine + symbol;
//         } else {
//             inputLine = inputLine + ' ';
//         }
//     }
//     console.log(inputLine);
//     inputLine = '';
//     controlRight += 1;
//     controlLeft -= 1;
// };

// Exercício 05 - Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

let size = 7;
let inputLine = '';
let symbol = '*';
let midOfMatrix = (size + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 1; lineIndex <= midOfMatrix; lineIndex += 1) {
    let outputLine = '';
    for (let columnIndex = 1; columnIndex <= size; columnIndex += 1) {
        if (columnIndex == controlLeft || columnIndex == controlRight || lineIndex == midOfMatrix) {
            outputLine += symbol;
        } else {
            outputLine += ' ';
        }
    }
    console.log(outputLine);
    controlRight += 1;
    controlLeft -= 1;
};