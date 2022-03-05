
var Contact = require('../model/Contact');
const flash = require('express-flash');
const session = require('express-session');

exports.create = (req, res)=>{
    if(req.body.email == null){
        const newContact = new Contact({
            fname: req.body.fname,
            lname: req.body.lname,
            message: req.body.message
        });
        newContact.save();
    }else{
        const newContact = new Contact({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            message: req.body.message
        });
        newContact.save();
    }
    req.flash('success_msg', 'Message Sent');
    res.redirect('/contact');
}

exports.find = (req, res)=>{
    Contact.find()
    .then( contact => {
        res.send(contact)
    })
    .catch(err => {
        res.status(500).send({message: err.message | "Error retriving user"})
    })
}

exports.delete = (req, res)=> {
    const id = req.params.id;

    Contact.findByIdAndDelete(id)
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