const User = require('../models/users');
const {generateToken} = require('../utils/jwt');

async function loginUser(req, res) {
    const {username, password} = req.body;

    const existingUser = await User.findOne({username});
    if (!existingUser) {
        return res.json('Invalid username');
    }

    // if (existingUser.password !== password) {       //此处为明文密码判断
    //     return res.json('Invalid password');
    // }

    const validPassword = await existingUser.validateHashPassword(password);
    if(!validPassword) {
        return res.status(401).json('Invalid password');
    }

    const token = generateToken(existingUser._id);

    return res.json({username, token});
}

module.exports = loginUser;