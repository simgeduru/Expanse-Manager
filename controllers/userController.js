const userModel = require('../models/userModel');
//user modeli kullanmak için ekledik

//user model için gelebilecek istekleri yönetiyoruz
//tabloda kullanıcı var mı yoksa ekle

const loginC= async (req,res)=>{
    try {
        //on yuzden gelen datalar ayrıstırıldı
        const data= req.body;
        email=data.email;
        password=data.password;

        //denk ise tüm user verilerini ön yüze gönder
        const user= await userModel.findOne({email:email,password:password})
        if(user){
            res.status(201).json(user)
        }else{
            res.status(400).json({message: error})
        }

    } catch (error) {
        res.status(400).json({message:e.message})
    }
}

//register

const registerC= async(req,res)=>{
    try {
        //on uctan gelen bilgiyi modele row olarak tanımlamak save ile kalıcı yerleştirme yapıldı
        const newUser= new userModel(req.body);
        await newUser.save();
        res.status(201).send({message:"Başarılı kullanıcı kaydı.",newUser});

    } catch (error) {
        res.status(400).json;
    }
}

module.exports={loginC,registerC};