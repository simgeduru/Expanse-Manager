//yönlendirme, haritalandırma işlemleri burada yapılır express ile

const express = require('express');
const {loginC, registerC}= require("../controllers/userController");

//router methodunu adlık
const router = express.Router();

router.post('/login',loginC);

//eger get isteği gelirse registerC gönder
router.get('/register',registerC);

module.exports=router;