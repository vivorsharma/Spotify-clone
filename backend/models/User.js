const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const Usermodel = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    userName: {
        type: String,
    },
    gender: {
        type: String,
    },
    password: {
        type: String,
    },
    likedSongs: {
        type: String,
    },
    likedPlaylists: {
        type: String,
    },
    subscribedArtists: {
        type: String,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
},
    {
        timestamps: true,
    });

// we are generating token
Usermodel.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id }, 'SECRET_KEY');

    user.tokens = user.tokens.concat({ token });

    await user.save(); // Save the user document with the new token

    return token;
};

const User = mongoose.model("User", Usermodel)

module.exports = User;