// Código 01:

const { expect } = require('chai');
const resposta = calculaSituacao(4);

expect(resposta).equals('reprovação');

/* No código acima, estamos chamando nossa função. Logo em seguida, afirmamos que seu retorno armazenado na constante resposta, 
deve ser igual (equals) a reprovação. */

// Código 02:

const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', function () {
  it('retorna "reprovação"', function () {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovação');
  });
});

/* Perceba que o to e o be não alteraram em nada a validação realizada, porém a leitura fica muito mais fluida e natural. 
É como se estivéssemos dizendo que nosso teste espera a resposta ser igual a “reprovação”. */