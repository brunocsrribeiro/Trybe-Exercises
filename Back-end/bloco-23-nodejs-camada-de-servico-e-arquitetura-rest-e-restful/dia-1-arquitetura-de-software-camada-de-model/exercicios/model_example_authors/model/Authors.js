const connection = require('./connection');

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName]
    .filter((Boolean))
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
}
const serialize = (authorsData) => {
  return {
    id: authorsData.id,
    firstName: authorsData.first_name,
    middleName: authorsData.middle_name,
    lastName: authorsData.last_name,
  }
}

const getAll = async () => {
  const [authors] = await connection.execute(
    `SELECT
      id,
      first_name,
      middle_name,
      last_name 
    FROM authors`
  );

  return authors.map(serialize).map(getNewAuthor);
}

const getFindById = async (id) => {
  const [authorData] = await connection.execute(
    `SELECT
      id,
      first_name,
      middle_name,
      last_name 
    FROM authors
    WHERE id=?`, [id]
  );

  if (authorData.length === 0) return null;

  const { firstName, middleName, lastName} = authorData.map(serialize)[0];

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });
}

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
}

const create = async (firstName, middleName, lastName) => {
  connection.execute(`INSERT INTO authors (first_name, middle_name, last_name)
      VALUES (?, ?, ?)`, [firstName, middleName, lastName]);
}

module.exports = {
  getAll,
  getFindById,
  isValid,
  create,
};
