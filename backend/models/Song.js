const mongoose = require('mongoose');

const Songmodel = new mongoose.Schema({
    name: {
        type: String,
    },
    thumbnail: {
        type: String
    },
    track: {
        type: String,
    },
    artist: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
},
    {
        timestamps: true,
    });

const Song = mongoose.model("Song", Songmodel)

module.exports = Song