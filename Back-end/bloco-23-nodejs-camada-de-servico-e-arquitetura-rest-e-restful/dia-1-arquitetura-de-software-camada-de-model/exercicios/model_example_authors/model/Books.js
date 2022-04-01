const connection = require('./connection');

const serialize = (bookData) => {
  return {
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id,
  }
}

const getAll =  async () => {
  const [book] = await connection.execute(`SELECT * FROM books`);

  return book.map(serialize);
}

const getByAuthorId = async (authorId) => {
  const [books] = await connection.execute( 'SELECT * FROM books WHERE author_id=?', [authorId]);

  return books.map(serialize);
}

const getAuthorOfBookById = async (id) => {
  const [bookData] = await connection.execute(`SELECT * FROM books WHERE id=?`, [id]);

  if (bookData.length === 0) return null;

  return bookData.map(serialize)[0];
} 

const isValid = (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number') return false;

  return true;
}

const create = async (title, authorId) => {
  connection.execute(`INSERT INTO books (title, author_id) VALUES (?, ?)`, [title, authorId]);
}

module.exports = {
  getAll,
  getByAuthorId,
  getAuthorOfBookById,
  isValid,
  create,
}
