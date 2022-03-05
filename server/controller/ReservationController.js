
var Reservation = require('../model/Reservation');
const flash = require('express-flash');
const session = require('express-session');

exports.create = (req, res)=>{
    const newReservation = new Reservation({
        date_event: req.body.date_event,
        email: req.body.email,
        event: req.body.event,
        event_location: req.body.event_location,
        expected_no: req.body.expected_no,
        cpnumber: req.body.cpnumber,
    });
    newReservation.save();
    req.flash('success_msg', 'Reservation Sent! Please wait admin contact your number and email. Thanks!');
    res.redirect('/reservation');
}

exports.find = (req, res)=>{
    Reservation.find()
    .then( reservation => {
        res.send(reservation)
    })
    .catch(err => {
        res.status(500).send({message: err.message | "Error retriving data"})
    })
}

exports.delete = (req, res)=> {
    const id = req.params.id;

    Reservation.findByIdAndDelete(id)
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