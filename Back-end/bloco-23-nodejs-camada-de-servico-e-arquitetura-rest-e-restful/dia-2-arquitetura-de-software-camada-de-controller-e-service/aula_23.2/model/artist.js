const connection = require('./connection');

const create = async (artist) => {
  const [{ insertId }] = await connection.execute(`
    INSERT INTO
      music.artist (name, genre)
    VALUES (?, ?);`,
    [ artist.name, artist.genre ]
  );

  return {
    id: insertId,
    ...artist,
  }
};

module.exports = {
  create,
}
