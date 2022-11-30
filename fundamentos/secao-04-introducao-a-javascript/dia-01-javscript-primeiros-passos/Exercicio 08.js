// Exercício 08 - Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

// Código:

const number1 = 13;
const number2 = 15;
const number3 = 12;

let isEven = false;

if(number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
    isEven = true;
}
console.log(isEven);