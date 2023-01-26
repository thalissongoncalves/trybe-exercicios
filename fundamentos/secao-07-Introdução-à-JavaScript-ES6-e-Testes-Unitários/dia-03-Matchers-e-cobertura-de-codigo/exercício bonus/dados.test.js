const searchEmployee = require("./dados");

describe('Teste a função searchEmployee se tem o retorno esperado', () => {
    it('searchEmployee é uma função', () => {
        expect(typeof searchEmployee).toBe('function');
    });
    it('Teste se a função retorna o primeiro nome da id consultada', () => {
        const actual = searchEmployee('4678-2', 'firstName');
        const expected = 'Paul';
        expect(actual).toBe(expected);
    });
    it('Teste se a função retorna o segundo nome da id consultada', () => {
        const actual = searchEmployee('4678-2', 'lastName');
        const expected = 'Dodds';
        expect(actual).toBe(expected);
    });
    it('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
        const actual = searchEmployee('1256-4', 'specialities');
        expect(actual).toContain('Hooks', 'Context API', 'Tailwind CSS');
    });
    it('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
        expect(() => { searchEmployee('1256-8', 'specialities') }).toThrow();
    });
    it('Testa a mensagem do erro para ID inexistente', () => {
        expect(() => { searchEmployee('1256-8', 'specialities') }).toThrowError(new Error("ID não identificada"));
    });
    it('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
        expect(() => { searchEmployee() }).toThrow();
    });
    it('Testa a mensagem do erro para informação inexistente', () => {
        expect(() => { searchEmployee('4678-2', 'shift') }).toThrowError(new Error("Informação indisponível"));
    });
})