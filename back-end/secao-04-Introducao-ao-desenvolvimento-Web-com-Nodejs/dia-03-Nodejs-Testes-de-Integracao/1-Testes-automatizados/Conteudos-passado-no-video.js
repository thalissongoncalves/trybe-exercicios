// Crie a pasta tests
// Dentro da pasta tests, crie uma pasta chamado unit
// Dentro da pasta unit crie um arquivo de teste, ex: "fsUtils.test.js"
// Dentro do arquivo package.json, em scripts, crie um novo chamado "test", com o valor: "mocha tests/**/*.test.js --exit"
// No arquivo fsUtils.test.js contém o seguinte código:

const { expect } = require('chai');

const { readMissionsData } = require('../../src/utils/fsUtils');

describe('A função readMissions Data', function () {
    it('retorna um array', async function() {
        const missions = await readMissionsData;
        expect(missions).to.be.instanceOf(Array); // Espera que tenha um retorno sendo do tipo array.
    })
})