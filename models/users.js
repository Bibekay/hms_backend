const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true,
        minlength: 6
    },

    contact:{
        type: String,
        required:true
        
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },

    birthyear:{
        type:String,
        required:false
    },
    gender:{
        type:String,
        required: false
    },

    image:{
        type:String
    },

    admin: {
        type: Boolean,
        default: false
    }

}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);