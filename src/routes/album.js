const express = require('express');
const { getAllAlbums } = require('../controllers/album');
const albumRouter = express.Router();

//albumRouter.get('/albums/', getAllAlbums);
//albumRouter.get('/albums/:albumid', getAlbumById);
//albumRouter.patch('/albums/:albumid', updateAlbum);
//albumRouter.delete('/albums/:albumid', deleteAlbum);

module.exports = albumRouter;
