const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    thumbnail: {
        type: String,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    songs: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Song",
        }
    ],
    collaborators: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
        }
    ],
},
    {
        timestamps: true,
    })

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;