const mongoose = require('mongoose');

//veri kayddedilecek alanın tasarımı

const userM = new mongoose.Schema({
    name: {
        type:String,
        required:[true, "Lütfen isim alanın gözden geçirin"]
    },
    email:{
        type:String,
        unique: true,
        required:[true, 'Please provide your email'] 
    },
    password:{
        type:String,
        required:[true, 'Please enter a Password']
    }
}
);

const User= mongoose.model("users", userM);
module.exports=User;