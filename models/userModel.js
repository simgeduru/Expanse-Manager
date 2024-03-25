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

/* const newUser = new User({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "s3cret"
  });
  
  newUser.save()
    .then(doc => {
      console.log("Kullanıcı başarıyla eklendi:", doc);
    })
    .catch(err => {
      console.error("Kullanıcı eklenirken hata oluştu:", err);
    }); */