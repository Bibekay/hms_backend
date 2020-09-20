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

router.get('/booking', (req,res,next)=>{
    Booking.find({})
    .populate('user')
    .populate('hotel')
    .then((booking) => {
        res.json(booking);
    }).catch((err) => next(err));

});

router.get('/userBookings', auth.verifyUser, (req, res, next) => {
    Booking.find({user:req.user._id})
    .populate('hotel')
    .populate('user')
    .then((booking) => {
        res.json(booking);
    }).catch((err) => next(err));
});

router.delete('/cancelBooking/:id', auth.verifyUser, (req, res, next)=> {
    Booking.findByIdAndDelete(req.params.id)
    .then((booking)=>{
        res.json({status:"deleted"});
    })
}); 



module.exports = router;