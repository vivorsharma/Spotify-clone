const Playlist = require('../models/Playlist');
const User = require('../models/User');
const Song = require('../models/Song');

// create playlist
const createPlaylist = async (req, res) => {
    const userId = req.params.userId;
    try {
        const { name, thumbnail, songs } = req.body;
        if (!name || !thumbnail || !songs) {
            res.status(301).json({ err: "please fill all the fields" })
        }
        const playlist = new Playlist({ name, thumbnail, songs, owner: userId });
        await playlist.save();
        res.status(200).json({ success: true, message: "data fetched successfully", playlist })

    } catch (err) {
        res.status(200).json({ success: false, message: "failed to fetched data", err })
    }

}

// get a playlist by id
const getPlaylist = async (req, res) => {
    const playlistId = req.params.playlistId
    try {
        const playlist = await Playlist.findOne({ _id: playlistId }).populate({
            path: "songs",
            populate: {
                path: "artist"
            }
        })
        if (!playlist) {
            res.status(404).json({ err: "playlist not found" })
        }

        res.status(200).json({ success: true, message: "data fetched successfully", playlist })

    } catch (err) {
        res.status(500).json({ success: false, message: "failed to fetched data", err })

    }
}

// get all playlist made by me 
const getmy_playlist = async (req, res) => {
    const userId = req.params.userId;

    try {
        // Find playlists by the provided user ID
        const playlists = await Playlist.find({ owner: userId }).populate('songs');

        if (playlists) {
            res.json({ playlists });
        } else {
            res.status(404).json({ message: 'No playlists found for this user.' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
}

// get all playlist made by an artist
const get_all = async (req, res) => {
    const artistId = req.params.artistId;
    try {
        const artist = await User.findOne({ _id: artistId });
        if (!artist) {
            res.status(304).json({ err: " not found" })
        }
        const playlists = await Playlist.find({ owner: artistId })
        if (!playlists) {
            res.status(301).json({ err: "artist not found" })
        }
        res.status(200).json({ success: true, message: "data fetched successfully", playlists })


    } catch (err) {
        res.status(500).json({ success: false, message: "failed to fetched data", err })
    }
}

// add a song to playlist
const addsong_playlist = async (req, res) => {
    const { playlistId, songId } = req.body;

    try {
        // Find the playlist by ID
        const playlist = await Playlist.findById(playlistId);

        if (!playlist) {
            return res.status(404).json({ message: 'Playlist not found' });
        }

        // Find the song by ID
        const song = await Song.findById(songId);

        if (!song) {
            return res.status(404).json({ message: 'Song not found' });
        }

        // Add the song to the playlist's 'songs' array
        playlist.songs.push(songId);
        await playlist.save();

        res.status(200).json({ message: 'Song added to the playlist' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = {
    createPlaylist,
    getPlaylist,
    get_all,
    getmy_playlist,
    addsong_playlist
};