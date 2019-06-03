const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  _id: {
    type: String,
    uppercase: true,
  },
  name: {
    type: String,
    required: true,
    alias: 'fullname'                //alias方法 在此处比下面的schema.virtual方法更简便，但后者可实现更多功能
  },
  description: {
    type: String,
    default: '',
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    }
  ],

  // get时不显示__V
  __v: {type: Number, select: false},            //需要区分大小写V
},
{
    timestamps: true,
    toJSON: {
        virtuals: true
    }
}
);

schema.virtual('code').get(function () {  // 可以实现：根据first和last name实现一个full name
  return this._id;
});

const model = mongoose.model('Course', schema);

module.exports = model;