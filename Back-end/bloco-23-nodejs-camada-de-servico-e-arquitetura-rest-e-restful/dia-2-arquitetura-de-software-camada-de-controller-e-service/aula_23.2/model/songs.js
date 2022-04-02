const connection = require('./connection');

const create = async (song) => {
  const [{ insertId }] = await connection.execute(`
    INSERT INTO
      music.song (name, album, artist_id)
    VALUES
      (?, ?, ?);`,
    [ song.name, song.album, song.artistId ]
  );

  return {
    id: insertId,
    ...song,
  }
};

module.exports = {
  create,
}
