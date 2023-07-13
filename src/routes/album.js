const express = require('express');
const { readAllAlbums, readAlbumById } = require('../controllers/album');
const albumRouter = express.Router();

albumRouter.get('/albums/', readAllAlbums);
albumRouter.get('/albums/:id', readAlbumById);
//albumRouter.patch('/albums/:albumid', updateAlbum);
//albumRouter.delete('/albums/:albumid', deleteAlbum);

module.exports = albumRouter;
