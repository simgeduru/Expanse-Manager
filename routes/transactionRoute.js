const express = require('express');
const {createTransaction,
getTransaction,
getByIdTransaction,
updateTransaction,
deleteTransaction,
getUserTransactions}
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
//kullanıcı işlemleri
router.get('/userTransactions', getUserTransactions);
//router.post('/userTransactionsByDateRange', getUserTransactionsByDateRange);


module.exports=router;