const connection = require("../model/connection");

const createAddress = async (address) => {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO 
      ENDERECO (RUA, BAIRRO, CIDADE, ESTADO, FK_ID_CLIENTE)
    VALUES (?, ?, ?, ?, ?);`,
    [ address.RUA, address.BAIRRO, address.CIDADE, address.ESTADO, address.FK_ID_CLIENTE ]
  );

  return {
    ID_ENDERECO: insertId,
    ...address,
  };
}

module.exports = {
  createAddress,
}
