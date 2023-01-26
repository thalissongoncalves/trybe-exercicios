const { info, printMessage } = require('./printMessage.js');

describe('Teste a função printMessage para ver se obtém o retorno esperado', () => {
    it('Teste obj info', () => {
        expect(info).toHaveProperty('personagem');
    });
    it('teste função printMessage', () => {
        expect(printMessage(info)).toMatch('Boas vindas,');
        expect(printMessage(info)).toMatch(info.personagem);
      });
    it('Teste fluxo de exceção função printMessage', () => {
        expect(() => { printMessage('Margarida') }).toThrow();
    });
})