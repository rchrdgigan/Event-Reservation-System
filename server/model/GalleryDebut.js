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

const GalleryDebut = mongoose.model('gallery_debut',GallerySchema);

module.exports = GalleryDebut;