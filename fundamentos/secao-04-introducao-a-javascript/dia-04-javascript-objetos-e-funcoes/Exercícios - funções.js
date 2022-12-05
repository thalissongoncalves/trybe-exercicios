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

// Exercício 03 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// Array de teste: [2, 4, 6, 7, 10, 0, -3];.

// Valor esperado no retorno da função: 6.

function minorIndex (numbers) {
    let minorIndex = 0;
    for (index in numbers) {
        if (numbers[minorIndex] > numbers[index]) {
            minorIndex = index;
        }
    }

    return minorIndex;
}

console.log(minorIndex([2, 4, 6, 7, 10, 1, 3]));

// Exercício 04 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

// Valor esperado no retorno da função: Fernanda.

function indexWithMostCharacters (strings) {
    let indexWithMostCharacters = strings[0];
    for (let index in strings) {
        if (indexWithMostCharacters.length < strings[index].length)
        indexWithMostCharacters = strings[index];
    }

    return indexWithMostCharacters;
}

console.log(indexWithMostCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Exercício 05 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// Array de teste: [2, 3, 2, 5, 8, 2, 3];.

// Valor esperado no retorno da função: 2.

function mostRepeatedNumber (numbers) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;

    for (let index in numbers) {
        let verificaNumero = numbers[index];
        for (let index2 in numbers) {
            if (verificaNumero === numbers[index2]) {
                contNumero += 1;
            }
        }
        if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = index;
        }
        contNumero = 0;
    }

    return numbers[indexNumeroRepetido];
}

console.log(mostRepeatedNumber([4, 3, 4, 5, 8, 4, 3]));