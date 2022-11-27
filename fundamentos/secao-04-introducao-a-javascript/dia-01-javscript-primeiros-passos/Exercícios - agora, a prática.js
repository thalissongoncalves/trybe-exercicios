// Exercício 01 - Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// const a = 10;
// const b = 10;

// console.log("Adição: " + (a + b));
// console.log("Subtração: " + (a - b));
// console.log("Multiplicação: " + (a * b));
// console.log("Divisão: " + (a / b));
// console.log("Módulo: " + (a % b));

// Exercício 02 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.

// const numero1 = 30;
// const numero2 = 50;

// if(numero1 > numero2) {
//     console.log("Número 30 é maior que Número 50");
// } else {
//     console.log("Número 50 é maior que Número 30");
// }

// Exercício 03 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

// const numero1 = 60;
// const numero2 = 200;
// const numero3 = 130;

// if(numero1 > numero2 && numero3) {
//     console.log("numero1 é maior que numero2 e numero3");
// } else if(numero2 > numero3 && numero1) {
//     console.log("numero2 é maior que numero3 e numero1");
// } else {
//     console.log("numero3 é maior que numero2 e numero1");
// }

// Exercício 04 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

// const parametro = "mouse";

// if (parametro === "teclado") {
//     console.log("positive");
// } else if (parametro === "monitor") {
//     console.log("negative");
// } else {
//     console.log("0");
// }

// Exercício 05 - 🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

// const angulo1 = 60;
// const angulo2 = 60;
// const angulo3 = 60;

// if(angulo1 + angulo2 + angulo3 === 180) {
//     console.log("true, os ângulos formam um triângulo válido");
// } else {
//     console.log("false");
// }

//Exercício 06 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

// let peçaEscolhida = "rei";

// switch (peçaEscolhida) {
//     case "rei":
//         console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
//         break;
//     case "rainha":
//         console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
//         break;
//     case "bispo":
//         console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
//         break;
//     case "cavalo":
//         console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
//         break;
//     case "torre":
//         console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
//         break;
//     case "peão":
//         console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
//         break;
//     default:
//         console.log("Peça inválida.")
// }

// Exercício 07 - Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const nota = 1;

if (nota < 0 || nota > 100) {
    console.log("Nota inválida, insira uma nota de 0 a 100.");
} else if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else if (nota >= 50) {
    console.log("E");
} else {
    console.log("F");
}