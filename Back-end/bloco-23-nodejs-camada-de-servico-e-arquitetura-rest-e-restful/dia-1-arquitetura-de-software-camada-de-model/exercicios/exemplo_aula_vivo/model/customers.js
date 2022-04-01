const connection = require("./connection");

const getAll = async () => {
  const [ customers ] = await connection.execute(
    'SELECT * FROM CLIENTE;'
  );

  return customers;
}

const getById = async (id) => {
  const [ customerId ] = await connection.execute(
    'SELECT * FROM CLIENTE WHERE ID_CLIENTE = ?;', [id]
  );

  return customerId;
}

const createCustomer = async (customer) => {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO CLIENTE ( NOME, SEXO, EMAIL, CPF)
      VALUES (?, ?, ?, ?);`, [ customer.NOME, customer.SEXO, customer.EMAIL, customer.CPF ]
  );

  return {
    ID_CLIENTE: insertId,
    ...customer,
  };
}

const deleteCustomer = async (id) => {
  await connection.execute(
    'DELETE FROM CLIENTE WHERE ID_CLIENTE = ?', [id]
  );
}

const updateCustomerData = async (customer) => {
  await connection.execute(
    `UPDATE
      CLIENTE
    SET
      NOME = ?,
      SEXO = ?,
      EMAIL = ?,
      CPF = ?
    WHERE ID_CLIENTE = ?;`,
    [ customer.NOME, customer.SEXO, customer.EMAIL, customer.CPF, customer.ID_CLIENTE ]
  );

  return customer;
}

module.exports = {
  getAll,
  getById,
  createCustomer,
  deleteCustomer,
  updateCustomerData,
}
