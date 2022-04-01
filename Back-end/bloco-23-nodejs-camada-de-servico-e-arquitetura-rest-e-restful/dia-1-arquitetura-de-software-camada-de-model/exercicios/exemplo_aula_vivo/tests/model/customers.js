const { expect } = require('chai');

const customersModel = require('../../model/customers');

describe('listar todos os clientes', () => {
  
  it('o resultado é um array', async () => {
    const customers = await customersModel.getAll();

    expect(customers).to.be.an('array');
  });

  it('cada objeto no array tem as propriedades id, nome, sexo, email e cpf', async () => {
    const customers = await customersModel.getAll();

    customers.forEach(customer => {
      expect(customer).to.have.keys('ID_CLIENTE', 'NOME', 'SEXO', 'EMAIL', 'CPF');
    });
  });
});