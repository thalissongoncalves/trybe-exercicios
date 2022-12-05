// Exercício 01 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara

// verificaPalindrome('arara')

// Retorno esperado: true
// verificaPalindrome('desenvolvimento')

// Retorno esperado: false

function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));

// Exercício 02 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Array de teste: [2, 3, 6, 7, 10, 1];.

// Valor esperado no retorno da função: 4.

function indexOfTheLargest (numbers) {
    majorIndex = 0;
    for (let index in numbers) {
        if (numbers[majorIndex] < numbers[index]) {
            majorIndex = index;
        }
    }

    return majorIndex;
}

console.log(indexOfTheLargest([1, 2, 3, 4, 5, 2]));