const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    hotel:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Hotel"
    },
    
    booking_status:{
        type: String,
        default:"pending"
        
    }
}
    , {timestamps: true});

module.exports = mongoose.model('Bookings', orderSchema);