let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 01: Percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

//Exercício 02: Some todos os valores contidos no array e imprima o resultado;

// let sum = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
// }

// console.log('Soma total: ' + sum);

//Exercício 03: Calcule e imprima a média aritmética dos valores contidos no array;

// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

// let sum = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
// }

// let mediaAritmetica = sum / numbers.length;

// console.log('Média aritmética dos valores contidos no array: ' + mediaAritmetica);

//Exercício 04: Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

// let sum = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
// }

// let mediaAritmetica = sum / numbers.length;

// console.log('Média aritmética dos valores contidos no array: ' + mediaAritmetica);

// if (mediaAritmetica > 20) {
//     console.log("Valor maior que 20.")
// } else {
//     console.log("Valor menor ou igual a 20.")
// }

//Exercício 05: Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let biggerNumber = 0;

// for (let index = 0; index < numbers.length; index += 1) {

//     let number = numbers[index];

//     if(number > biggerNumber) {
//         biggerNumber = number;
//     }
// }

// console.log(biggerNumber);

//Exercício 06: Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

// let oddNumber = 0;

// for (let index = 0; index < numbers.length; index += 1) {

//     let number = numbers[index];

//     if (number % 2 !== 0) {
//         console.log(number);
//     }
// }

//Exercício 07: Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// smallerNumber = 100;

// for (let index = 0; index < numbers.length; index += 1) {

//     let number = numbers[index];

//     if (number < smallerNumber) {
//         smallerNumber = number;
//     }
// }

// console.log (smallerNumber);

//Exercício 08: Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let array2 = [];

for (let index = 1; index <= 25; index += 1) {
    array2.push(index);
}

console.log(array2);