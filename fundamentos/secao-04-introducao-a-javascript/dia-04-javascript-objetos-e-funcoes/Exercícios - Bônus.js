// Exercício 01 - (Bônus) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa. ex: (III = 3)

// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

// Dicas:

// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:

// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.


// const numerosRomanos = {
//     i: 1,
//     v: 5,
//     x: 10,
//     xl: 50,
//     c: 100,
//     d: 500,
//     m: 1000,
// }

// function romanoParaDecimal(numero) {
//     numero = numero.toLowerCase();
//     const len = numero.length;
//     let soma = numerosRomanos[numero[len - 1]];
//     let atual = numerosRomanos[numero[len - 1]];

//     for (let index = 2; index <= len; index += 1) {
//         const prox = numerosRomanos[numero[len - index]];
//         if (atual <= prox) {
//             soma += prox;
//           } else {
//             soma -= prox;
//           }

//         atual = prox;
//     }

//     return soma;
// }

// console.log(romanoParaDecimal('MMXVIII')); 
// console.log(romanoParaDecimal('VI')); 
// console.log(romanoParaDecimal('IV')); 

// Exercício 02 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.

// Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.

// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

// const arrayOfNumbers = (vector) => {
//     const newArray = [];
//     for (let index = 0; index < vector.length; index += 1) {
//             const numbers = vector[index];
//             for (let indexSub = 0; indexSub < numbers.length; indexSub += 1) {
//                 const current = numbers[indexSub];

//                 if ((current % 2) === 0) {
//                     newArray.push(current);
//                 }
//             }
//     }
//     return newArray;
// }

// console.log(arrayOfNumbers(vector))

// Exercício 03 - A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];


const object = {};
    for(let index = 0; index < basket.length; index += 1) {
        const fruit = basket[index];
        if (!object[fruit]) object[fruit] = 0;
        object[fruit] += 1;
    }

const summaries = [];
    for(fruit in object) {
        let message = `${object[fruit]} ${fruit}`;
        if (object[fruit] > 1) message += 's';
        summaries.push(message);
    }

console.log(`Sua cesta possui: ${summaries.join(', ')}.`);