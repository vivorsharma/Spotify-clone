const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistContoller');

// create playlist
router.post('/create_playlist/:userId', playlistController.createPlaylist);

// Get a playlist by ID
router.get('/get_playlist/:playlistId', playlistController.getPlaylist);

// get playlist made by an artist
router.get('/get_all/:artistId', playlistController.get_all);

// get playlist by me 
router.get('/getmy_playlist/:userId', playlistController.getmy_playlist);

// add a song to playlist
router.post('/addSong', playlistController.addsong_playlist);

module.exports = router