const express = require('express')
const router = express.Router();
const songController = require('../controllers/songController');
const authMiddleware = require('../middlewares/auth')

router.post('/create_song', songController.create_song);

// get songs by artist 
router.get('/get_artist/:artistId', songController.getArtist);

// get single song by name 
router.get('/song_name/:songName', songController.songName);

module.exports = router;