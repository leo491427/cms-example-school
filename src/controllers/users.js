const User = require('../models/users');
const {generateToken, validateToken} = require('../utils/jwt');

async function addUser(req, res) {
    const {username, password} = req.body;

    const existingUser = await User.findOne({username});
    if (existingUser) {
        return res.status(400).json('user already exists');
    }

    const user = new User({
        username,
        password,
    });

    user.hashPassword();
    await user.save();
    
    const token = generateToken(user._id);

    return res.json({username, token});
}

module.exports = addUser;