const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

schema.methods.hashPassword = async function () {         //创建schema自定义函数，注意关键字methods！
    this.password = await bcrypt.hashSync(this.password, 10);
};

schema.methods.validateHashPassword = async function(password) {
    const validpassword = await bcrypt.compareSync(password, this.password);
    return validpassword;
}

const model = mongoose.model('User', schema);

module.exports = model;