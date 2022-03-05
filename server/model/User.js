const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    fname:{
        type:String,
        required: true
    },
    lname:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    contact_no:{
        type:String,
        required: true
    },
    fb_name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
})

const User = mongoose.model('user',schema);

module.exports = User;