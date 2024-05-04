//yönlendirme, haritalandırma işlemleri burada yapılır express ile

const express = require('express');
const {loginC, registerC}= require("../controllers/userController");

//router methodunu adlık
const router = express.Router();

router.post('/login',loginC);

//eger get isteği gelirse registerC gönder
//burada post kullanmamız gerekmiyor mu
router.get('/register',registerC);

module.exports=router;