const Song = require('../models/Song');
const authMiddleware = require('../middlewares/auth');
const User = require('../models/User');

// create song
const create_song = async (req, res) => {
    const { artist, name, thumbnail, track } = req.body;


    try {
        if (!name || !thumbnail || !track) {
            res.status(402).json({ success: false, message: "please fill all the fields" })
        }
        const song = new Song({ artist, name, thumbnail, track })
        await song.save();
        res.status(200).json({ success: true, message: "song created successfully", song })

    } catch (err) {
        res.status(500).json({ success: false, message: "internal server error", err })
    }

}

// get songs by any artist
const getArtist = async (req, res) => {
    try {
        const artistId = req.params.artistId

        const artist = await User.find({ _id: artistId });
        if (!artist) {
            res.status(301).json({ err: "artist does not exist" });
        }
        const songs = await Song.find({ artist: artistId })
            .populate("artist", 'firstName lastName')
        res.status(200).json({ success: true, message: "data fetched successfully", songs });

    } catch (err) {
        res.status(500).json({ success: false, message: "failed to fetched data", err });
    }
}

// get single song by name 
const songName = async (req, res) => {
    try {
        const songName = req.params.songName;
        if (!songName) {
            res.status(301).json({ err: "song does not exist" });
        }
        const song = await Song.find({ name: songName })
            .populate("artist", 'firstName lastName')
        res.status(200).json({ success: true, message: "data fetched succesfully", song });

    } catch (err) {
        res.status(500).json({ success: false, message: "failed to fetched data", err });
    }
}


module.exports = {
    create_song,
    getArtist,
    songName,
}