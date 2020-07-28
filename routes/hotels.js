const express = require('express');
const Hotel = require('../models/hotels');
const auth = require('../auth');
const router = express.Router();
router.route('/product')


router.route('/hotel', auth.verifyUser)
.post((req,res,next) => {
    let hotel = new Hotel(req.body);
    hotel.hotel_name = req.body.hotel_name;
    hotel.description = req.body.description;
    hotel.price = req.body.price;
    hotel.hotel_image = req.body.hotel_image;
    hotel.save()
    .then((hotel) => {
        res.statusCode = 200;
        res.json(hotel);
    }).catch(next);



        
});

router.get('/hotel', (req,res,next)=>{
    Hotel.find({})
    .then((hotel) => {
        res.json(hotel);
    }).catch((err) => next(err));


});

router.put('/:id/Update',(req, res, next)=>
{
    newhotel = {
        hotel_name:req.body.hotel_name, 
        description: req.body.description,
        price:req.body.price, 
        hotel_image: req.body.hotel_image

        }
        Hotel.findByIdAndUpdate(req.params.id,  {$set:newhotel},{new:true})
        .then((reply)=>{
            if(reply == null) throw new Error("post not found");
            res.json(reply);
        }).catch(next);
 });

module.exports = router;