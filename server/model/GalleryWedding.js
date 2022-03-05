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

const GalleryWedding = mongoose.model('gallery_wedding',GallerySchema);

module.exports = GalleryWedding;