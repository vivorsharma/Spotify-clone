const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const cors = require('cors')
// sign up
router.post('/signup', cors(), userController.signup)

// sign in
router.post('/sigin', userController.signin)

module.exports = router