const Song = require('../model/songs');
const Artist = require('../model/artist');
const crypto = require('crypto')

const create = async  (song) => {
  const { name, album , artist } = song;

  const newArtist = await Artist.create({
    name: artist.name,
    genre: artist.genre
  });

  const artistId = newArtist.id;

  const newSong = await Song.create({
    name,
    album,
    artistId
  });

  return newSong;
}

const validatedToken = 
module.exports = {
  create,
}