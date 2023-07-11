const express = require('express');
const { createArtist, readAllArtists, readArtistById, updateArtist, deleteArtist } = require('../controllers/artist');
const { createAlbum } = require('../controllers/album');

const artistRouter = express.Router();

artistRouter.post('/', createArtist);
artistRouter.get('/', readAllArtists);
artistRouter.get('/:id', readArtistById);
artistRouter.patch('/:id', updateArtist);
artistRouter.delete('/:id', deleteArtist);

artistRouter.route('/:artistId/albums').post(createAlbum);

module.exports = artistRouter;