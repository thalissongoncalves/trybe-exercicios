// Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// Exercício 01 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:

// Bem-vinda, Margarida

    console.log('Bem-vinda, ' + info.personagem);

// Exercício 02 - Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:

// {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
//   }

info['recorrente'] = 'Sim';
console.log(info);

// Exercício 03 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

// personagem
// origem
// nota
// recorrente

for (let index in info) {
    console.log(index);
}

// Exercício 04 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

// Margarida
// Pato Donald
// Namorada do personagem principal nos quadrinhos do Pato Donald
// Sim

// for (let index in info) {
//     console.log(info[index]);
// }

// Exercício 05 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes //// Atenção para essa última linha!

let info2 = {
    personagem: ' e Tio Patinhas',
    origem: ' e Christmas on Bear Mountain, Dell´s Four Color Comics #178',
    nota: ' e O último MacPatinhas',
    recorrente: 'Sim',
}

for (let properties in info) {
    if (
        properties === 'recorrente' &&
        info[properties] === 'Sim' &&
        info2[properties] === 'Sim'
    ) {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[properties] + ' e ' + info2[properties]);
    }
}