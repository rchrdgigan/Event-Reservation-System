
var GalleryWedding = require('../model/GalleryWedding');
const flash = require('express-flash');
const session = require('express-session');

exports.create = (req, res)=>{
    const newGalleryWedding = new GalleryWedding({
        image: req.file.filename,
    });
    newGalleryWedding.save();
    req.flash('success_msg', 'Upload successfully!');
    res.redirect('/admin-wedding');
}

exports.find = (req, res)=>{
    GalleryWedding.find()
    .then( data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({message: err.message | "Error retriving data"})
    })
}

exports.delete = (req, res)=> {
    const id = req.params.id;

    GalleryWedding.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
        }else{
            res.send({
                message : "User was deleted successfully!"
            })
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Could not delete User with id=" + id
        });
    });
}