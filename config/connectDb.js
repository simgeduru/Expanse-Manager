const mongoose = require('mongoose');

const db = async() =>{
    
    try {
        await mongoose.connect(process.env.MongoDBURL);
        console.log("Mongodb aktif.");
    } catch (error) {
        console.log("db'ye bağalanamadı",error);
    }
}
module.exports=db;