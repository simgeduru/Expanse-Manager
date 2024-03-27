const Category = require('../models/categoryModel');

//crud operasyonları

exports.createCategory= async(req,res)=>{
    try {
        const category = new Category({...req.body,user:req.user.id});
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


exports.getCategory= async (req,res)=>{
    try {
        const categories = await Category.find({user:req.user.id}) 
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({message:"veritabanı bağlantı hatası"});
    }
}

exports.deleteCategory= async(req,res)=>{
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json();
    } catch (error) {
        res.status(500).json({message:"veritabanı bağlantı hatası"});
    }
}

//update methodu, router 