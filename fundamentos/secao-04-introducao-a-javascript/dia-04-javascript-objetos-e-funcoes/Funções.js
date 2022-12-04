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


// function maiorNum(primeiroNum, segundoNum) {
//     if (primeiroNum > segundoNum) {
//         return primeiroNum + ' é maior que ' + segundoNum + '.';
//     } else if (a < b) {
//         return segundoNum + ' é maior que ' + primeiroNum + '.';
//     } else {
//         return 'Os números são iguais';
//     }
// }

// console.log(maiorNum(20, 10));

// Exercício 03 - Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

// function maiorNum (primeiroNum, segundoNum, terceiroNum) {
//     if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
//         return primeiroNum + ' é maior que ' + segundoNum + ' e ' + terceiroNum + '.';
//     } else if (segundoNum > primeiroNum && segundoNum > terceiroNum) {
//         return segundoNum + ' é maior que ' + primeiroNum + ' e ' + terceiroNum + '.';
//     } else {
//         return terceiroNum + ' é maior que ' + primeiroNum + ' e ' + segundoNum + '.';
//     }
// }

// console.log(maiorNum(20, 10, 22));

// Exercício 04 - Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function value (firstName, secondName) {
    if (firstName !== 'Thalisson') {
        return 'positive';
    } else if (secondName !== 'Gonçalves') {
        return 'negative';
    } else {
        return 0;
    }
}

console.log(value('Thalisson Gonçalves'));