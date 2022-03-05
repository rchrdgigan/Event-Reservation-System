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

const GalleryOther = mongoose.model('gallery_other',GallerySchema);

module.exports = GalleryOther;