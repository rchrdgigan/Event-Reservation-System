const mongoose = require('mongoose');

var ReservationSchema = new mongoose.Schema({
    date_event:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    event:{
        type:String,
        required: true
    },
    event_location:{
        type:String,
        required: true
    },
    expected_no:{
        type:String,
        required: false
    },
    cpnumber:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
})

const Reservation = mongoose.model('reservation',ReservationSchema);

module.exports = Reservation;