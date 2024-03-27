const mongoose = require('mongoose');

const categoryM = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    type:{
        type:String,
        enum:['income','expense','saving'],
        required:true
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        required:true
    }

})

module.exports=mongoose.model('category',categoryM);