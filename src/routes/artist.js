const express = require('express');
const { createArtist, readAllArtists, readArtistById, updateArtist, deleteArtist } = require('../controllers/artist');
const { createAlbum } = require('../controllers/album');

const artistRouter = express.Router();

artistRouter.post('/artists/', createArtist);
artistRouter.get('/artists/', readAllArtists);
artistRouter.get('/artists/:id', readArtistById);
artistRouter.patch('/artists/:id', updateArtist);
artistRouter.delete('/artists/:id', deleteArtist);

artistRouter.route('/artists/:artistId/albums').post(createAlbum);

module.exports = artistRouter;