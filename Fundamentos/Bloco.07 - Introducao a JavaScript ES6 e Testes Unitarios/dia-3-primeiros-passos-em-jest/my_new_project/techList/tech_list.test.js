const techList = require('./tech_list.js');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Bruno')).toEqual([
      {
        tech: 'CSS',
        name: 'Bruno'
      },
      {
        tech: 'HTML',
        name: 'Bruno'
      },
      {
        tech: 'JavaScript',
        name: 'Bruno'
      },
      {
        tech: 'Jest',
        name: 'Bruno'
      },
      {
        tech: 'React',
        name: 'Bruno'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Bruno')).toBe('Vazio!');
  });
});