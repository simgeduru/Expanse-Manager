const categoryM = require('../models/categoryModel');


//crud operasyonları

exports.createCategory= async(req,res)=>{
    try {
        const category = new categoryM({...req.body,user:req.user.id});
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


exports.getCategory= async(req,res)=>{
    try {
        const categories = await categoryM.find({user:req.user.id}) 
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({message:"veritabanı bağlantı hatası"});
    }
}

exports.deleteCategory= async(req,res)=>{
    try {
        await categoryM.findByIdAndDelete(req.params.id);
        res.status(200).json();
    } catch (error) {
        res.status(500).json({message:"veritabanı bağlantı hatası"});
    }
}

//update methodu, router 
//update metodu yazıldı
exports.updateCategory= async(req,res)=>{
    try {
        const category = await categoryM.findByIdAndUpdate(req.params.id);
        //buraya güncellemeler yapılacak
        res.status(200).json("Güncelleme başarılı");
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports={createCategory,getCategory,deleteCategory,updateCategory};