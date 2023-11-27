const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import your User model


const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ success: false, message: 'Authentication token is missing' });
    }

    try {
        const decoded = jwt.verify(token, 'SECRET_KEY');
        if (!decoded || !decoded._id) {
            return res.status(401).json({ success: false, message: 'Invalid token' });
        }
        const user = await User.findById(decoded._id);

        if (!user) {
            return res.status(401).json({ success: false, message: 'User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ success: false, message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
