const express = require('express');
const {createTransaction,
getTransaction,
getByIdTransaction,
updateTransaction,
deleteTransaction}
= require('../controllers/transactionController');

const router = express.Router();

//sunucu istekleri
//kullanıcı ilkk defa giriş yapıyorsa post
//put bir kısmı değişecekse yapılması daha sağlıklı olur

router.post('/post',createTransaction);
router.get('/get',getTransaction);
router.get('/:id',getByIdTransaction);
router.put('/:id',updateTransaction);
router.delete('/:id', deleteTransaction);

module.exports=router;