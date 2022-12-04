// Para fixar:
// Exercício 01 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// function soma(a, b) {
//     return a + b;
// }

// console.log(soma(2, 2));

// function sub(a, b) {
//     return a - b;
// }

// console.log(sub(5, 2));

// function mult(a, b) {
//     return a * b;
// }

// console.log(mult(6, 2));

// function div(a, b) {
//     return a / b;
// }

// console.log(div(6, 2));

// function mod(a, b) {
//     return a % b;
// }

// console.log(mod(10, 2));

// Exercício 02 - Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.


function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
        return primeiroNum + ' é maior que ' + segundoNum + '.';
    } else if (a < b) {
        return segundoNum + ' é maior que ' + primeiroNum + '.';
    } else {
        return 'Os números são iguais';
    }
}

console.log(maiorNum(20, 10));