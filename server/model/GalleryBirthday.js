const mongoose = require('mongoose');

var GallerySchema = new mongoose.Schema({
    image:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
})

const GalleryBirthday = mongoose.model('gallery_birthday',GallerySchema);

module.exports = GalleryBirthday;