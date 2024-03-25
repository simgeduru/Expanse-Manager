const mongoose = require('mongoose');

//modeli tasarlayacak fonksiyonu yazıyoruz

const transactionM = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    },

    type:{
        type:String,
        enum:['income','expense','saving'],
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("Transaction",transactionM);