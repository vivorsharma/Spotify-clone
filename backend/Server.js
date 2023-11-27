const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('./db/conn');
require("dotenv").config();

app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to my spotify app')
})

const port = 8000;

app.use('/api/user', require('./routes/userRouter'));
app.use('/api/song', require('./routes/songRouter'));
app.use('/api/playlist', require('./routes/playlistRouter'));

app.listen(port, (req, res) => {
    console.log(`server is running on ${port}`)
})