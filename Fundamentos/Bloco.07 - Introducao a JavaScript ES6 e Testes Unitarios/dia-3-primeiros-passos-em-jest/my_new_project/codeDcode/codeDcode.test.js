const { encode, decode } = require('./codeDcode.js');

describe('Para as funções encode e decode crie os seguintes testes em Jest:', () => {
  it('Teste se funções encode e decode existem', () => {
    expect(encode).toBeDefined();
    expect(decode).toBeDefined();
  });

  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('ana')).toEqual('1n1');
    expect(decode('1n1')).toEqual('ana');
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('dede')).toEqual('d2d2');
    expect(decode('d2d2')).toEqual('dede');
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('titi')).toEqual('t3t3');
    expect(decode('t3t3')).toEqual('titi');
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('loto')).toEqual('l4t4');
    expect(decode('l4t4')).toEqual('loto');
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('chuchu')).toEqual('ch5ch5');
    expect(decode('ch5ch5')).toEqual('chuchu');
  });

  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('ana').length).toEqual(3);
    expect(decode('1n1').length).toEqual(3);
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('a', 'e', 'i', 'o', 'u')).toEqual('1', '2', '3', '4', '5');
    expect(decode('1', '2', '3', '4', '5')).toEqual('a', 'e', 'i', 'o', 'u');
  });
});