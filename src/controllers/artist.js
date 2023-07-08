const db = require('../db/index.js');

const createArtist = async (req, res) => {
    try {
        const { name, genre } = req.body;
        const insertQuery = `INSERT INTO Artists (name, genre) VALUES ($1, $2) RETURNING *`;
        const values = [name, genre];
        const { rows: [newArtist] } = await db.query(insertQuery, values);
        res.status(201).json(newArtist);
    } catch (error) {
        res.status(500).send('An error occurred while creating the artist.');
    }
};

module.exports = { createArtist };