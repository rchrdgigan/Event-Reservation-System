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

const GalleryChristening = mongoose.model('gallery_christ',GallerySchema);

module.exports = GalleryChristening;