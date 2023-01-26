const sum = require('./sum');

describe('Teste se a função sum tem o retorno esperado', () => {
    it('retorno de sum(4, 5) é 9', () => {
        const expected = 9;
        const actual = sum(4, 5);
        expect(actual).toBe(expected);
    });
    
    it('retorno de sum(0, 0) é 0', () => {
        const expected = 0;
        const actual = sum(0, 0);
        expect(actual).toBe(expected);
    });

    it('retorno de erro quando parâmetro é string', () => {
        expect(() => sum(1, '5')).toThrow('parameters must be numbers');
    })
})