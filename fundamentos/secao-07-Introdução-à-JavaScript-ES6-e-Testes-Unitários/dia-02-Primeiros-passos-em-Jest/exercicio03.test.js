const { encode, decode } = require('./exercicio03.js');

describe('Teste a função encode e decode', () => {
    it('A função encode é definida', () => {
        expect(encode).toBeDefined();
    });
    it('encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    });
    it('A função decode é definida', () => {
        expect(decode).toBeDefined();
    });
    it('decode é uma função', () => {
        expect(typeof decode).toEqual('function');
    })
    it('apenas a vogal a no número 1', () => {
        expect(encode('clara')).toEqual('cl1r1');
    });
    it('apenas a vogal e no número 2', () => {
        expect(encode('eren')).toEqual('2r2n');
    });
    it('apenas a vogal i no número 3', () => {
        expect(encode('iris')).toEqual('3r3s');
    });
    it('apenas a vogal o no número 4', () => {
        expect(encode('ovo')).toEqual('4v4');
    });
    it('apenas a vogal u no número 5', () => {
        expect(encode('cru')).toEqual('cr5');
    });
    it('apenas o número 1 na vogal a', () => {
        expect(decode('di1')).toEqual('dia');
    });
    it('apenas o número 2 na vogal e', () => {
        expect(decode('2l2v2n')).toEqual('eleven');
    });
    it('apenas o número 3 na vogal i', () => {
        expect(decode('3ndo andar de hel3cóptero')).toEqual('indo andar de helicóptero');
    });
    it('apenas o número 4 na vogal o', () => {
        expect(decode('4 mai4r j4gad4r d4 brasil')).toEqual('o maior jogador do brasil');
    });
    it('apenas o número 5 na vogal u', () => {
        expect(decode('t5 é mal5co?')).toEqual('tu é maluco?');
    })
    it('apenas a vogal a no número 1', () => {
        expect(encode('clara')).not.toEqual('clara');
    });
    it('apenas a vogal e no número 2', () => {
        expect(encode('eren')).not.toEqual('eren');
    });
    it('apenas a vogal i no número 3', () => {
        expect(encode('iris')).not.toEqual('iris');
    });
    it('apenas a vogal o no número 4', () => {
        expect(encode('ovo')).not.toEqual('ovo');
    });
    it('apenas a vogal u no número 5', () => {
        expect(encode('cru')).not.toEqual('cru');
    });
    it('apenas o número 1 na vogal a', () => {
        expect(decode('di1')).not.toEqual('di1');
    });
    it('apenas o número 2 na vogal e', () => {
        expect(decode('2l2v2n')).not.toEqual('2l2v2n');
    });
    it('apenas o número 3 na vogal i', () => {
        expect(decode('3ndo andar de hel3cóptero')).not.toEqual('3ndo andar de hel3cóptero');
    });
    it('apenas o número 4 na vogal o', () => {
        expect(decode('4 mai4r j4gad4r d4 brasil')).not.toEqual('4 mai4r j4gad4r d4 brasil');
    });
    it('apenas o número 5 na vogal u', () => {
        expect(decode('t5 é mal5co?')).not.toEqual('t5 é mal5co?');
    })
    it('números de caracteres retornado pela função encode é igual a recebida por parâmetro', () => {
        expect(encode('string').length).toEqual(6);
    });
    it('números de caracteres retornado pela função decode é igual a recebida por parâmetro', () => {
        expect(decode('string').length).toEqual(6);
    });
})