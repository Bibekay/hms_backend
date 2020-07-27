const express = require('express');
const Booking = require('../models/bookings');
const Hotel = require('../models/hotels');
const User = require('../models/users');
const auth = require('../auth');
const router = express.Router();
router.route('/booking')




//route post by logged in users
router.post('/booking', auth.verifyUser, (req, res, next) => {
    let booking = new Booking(req.body);
    booking.user = req.user._id;
    booking.hotel = req.body.hotel;
    booking.save()
    .then((booking) => {
        res.statusCode = 200;
        res.json(booking);
    }).catch(next);
});


module.exports = router;