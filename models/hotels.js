const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({

    hotel_name:{
        type: String
      
    },
    description:{
        type:String
    },

    price:{
        type:String
    },
    

    hotel_image:{
        type:String
    },

}
    , {timestamps: true});

module.exports = mongoose.model('Hotel', hotelSchema);