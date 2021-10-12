const searchEmployee = require('./professionalBoard.js');

describe('Teste se a função esta definida', () => {
  it('Teste se a função esta definida', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Teste se searchEmployee é uma função', () => {
    const expected = 'function';
    const test = typeof searchEmployee;

    expect(test).toBe(expected);
  });

  it('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
    const actual = searchEmployee('9852-2-2', "firstName");
    const expected = 'Jeff';

    expect(actual).toBe(expected);
  });

  it('Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
    const actual = searchEmployee('4678-2', "lastName");
    const expected = 'Dodds';

    expect(actual).toBe(expected);
  });

  it('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
    const actual = searchEmployee('1256-4', "specialities");

    expect(actual).toContain('Hooks', 'Context API', 'Tailwind CSS');
  });

  it('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
    expect(() => {searchEmployee('6666-0', 'specialities')}).toThrow();
  });

  it('Testa a mensagem do erro para ID inexistente', () => {
    const expected = new Error("ID não identificada");

    expect(() => { searchEmployee('1256-8', 'specialities') }).toThrowError(expected);
  });

  it('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
    expect(() => { searchEmployee() }).toThrow();
  });

  it('Testa a mensagem do erro para informação inexistente', () => {
    const expected = new Error('Informação indisponível')

    expect(() => { searchEmployee('4678-2', 'shift') }).toThrowError(expected);
  });
})