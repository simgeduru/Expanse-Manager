const transactionM = require('../models/transactionModel');


//crud

exports.createTransaction= async(req,res)=>{
    try {
        const newTransactions = new transactionM({...req.body, user:req.userId});
        await newTransactions.save();
        res.status(201).json(newTransactions);

    } catch (error) {
        console.log(error);
        res.status(409).json(error);
    }
};

//kayıtları ön yüzde görme

exports.getAllTransaction = async (req,res)=>{
    try {
        const transactions = await transactionM.find();
        if(!transactions) return res.status(404).json(err);

        //içinde veri varsa
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json(error);
    }
}

//ıdye göre sıralama

exports.getByIdTransaction = async (req,res)=>{
    try {
        const transaction = await transactionM.findById(req.params.id);
        if(!transaction){
            return res.status(404).json(error);
        }
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.updateTransaction = async (req,res)=>{
    try {
        const transaction = await transactionM.findByIdAndUpdate(req.params.id);
        //buraya güncellemeler yapılacak
        res.status(200).json("Güncelleme başarılı");
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.deleteTransaction= async (req,res)=>{
    try {
        await transactionM.findByIdAndDelete(req.params.id);
        res.status(200).json("Silindi");
    } catch (error) {
        res.status(500).json(error);
    }
}

//kullanici