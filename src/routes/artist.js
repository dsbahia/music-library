const express = require('express');
const { createArtist, readAllArtists, readArtistById, updateArtist, deleteArtist } = require('../controllers/artist');

const artistRouter = express.Router();

artistRouter.post('/', createArtist);
artistRouter.get('/', readAllArtists);
artistRouter.get('/:id', readArtistById);
artistRouter.patch('/:id', updateArtist);
artistRouter.delete('/:id', deleteArtist);

module.exports = artistRouter;