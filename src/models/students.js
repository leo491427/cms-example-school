const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: email => !Joi.validate(email, Joi.string().email()).error,
            msg: 'Invalid email format',       
            //如果上面这句没有也能输出错误提示：student validation failed: email: Validator failed for path `email` with value `123@ com`  
        }
    },
    courses: [
        {
            type: String,
            ref: 'Course',
        }
    ]
},
{
    timestamps: true,
    toJSON: {
        virtuals: true
    }
}
);

const model = mongoose.model('Student', studentSchema); //创建一个模型，取名为student

module.exports = model;