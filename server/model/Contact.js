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
    email:{
        type:String,
        required: false
    },
    message:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
})

const Contact = mongoose.model('contact',schema);

module.exports = Contact;