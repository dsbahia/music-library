const express = require('express');
const { readAllAlbums } = require('../controllers/album');
const albumRouter = express.Router();

albumRouter.get('/albums/', readAllAlbums);
//albumRouter.get('/albums/:albumid', getAlbumById);
//albumRouter.patch('/albums/:albumid', updateAlbum);
//albumRouter.delete('/albums/:albumid', deleteAlbum);

module.exports = albumRouter;
