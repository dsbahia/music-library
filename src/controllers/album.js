const db = require('../db');

const createAlbum = async (req, res) => {
  const { artistId } = req.params;
  const { name, year } = req.body;

  try {
    const {
      rows: [album],
    } = await db.query(
      'INSERT INTO Albums (name, year, artistId) VALUES ($1, $2, $3) RETURNING *',
      [name, year, artistId]
    );
    res.status(201).json(album);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while creating the album.' });
  }
};

const readAllAlbums = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM Albums');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while reading albums.' })
  }
};

module.exports = { createAlbum, readAllAlbums };
