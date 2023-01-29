// Nova pessoa contratada
// Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:

// crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

// utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const generateEmployees = (fullName) => {
    const transformLowCase = fullName.toLowerCase();
    const separator = transformLowCase.replace(' ', '_');
    const dados = { nomeCompleto: fullName, email: `${separator}@trybe.com` };
    return dados;
}

console.log(newEmployees(generateEmployees));

// Sorteador de loteria
// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

const numberChecker = (myNumber, number) => { 
    if(myNumber === number) {
        return "Parabéns, você ganhou!";
    } else {
        return "Tente novamente.";
    }
}

const numberGenerator = () => {
    const saveNumber = Math.random() * 5;
    const roundNumber = parseInt(saveNumber);
    return roundNumber;
};

console.log(numberChecker(1, numberGenerator()));