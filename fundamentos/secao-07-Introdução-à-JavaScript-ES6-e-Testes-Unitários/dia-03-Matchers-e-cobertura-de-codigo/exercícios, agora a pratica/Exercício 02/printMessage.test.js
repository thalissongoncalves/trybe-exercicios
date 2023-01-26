const { info, printMessage } = require('./printMessage.js');

describe('Teste a função printMessage para ver se obtém o retorno esperado', () => {
    it('Teste obj info', () => {
        expect(info).toHaveProperty('personagem');
    });
    it('Teste se há o retorno da string "Boas vindas, " + info.personagem', () => {
        expect(printMessage(info)).toMatch('Boas Vindas,');
        expect(printMessage(info)).toMatch(info.personagem);
    });
    it('teste função printMessage', () => {
        expect(printMessage(info)).toMatch('Boas vindas,');
        expect(printMessage(info)).toMatch(info.personagem);
      });
    it('Teste fluxo de exceção função printMessage', () => {
        expect(printMessage('lucas')).toThrow('objeto inválido');
    });
})