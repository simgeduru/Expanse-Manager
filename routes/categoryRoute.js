const express = require('express');
const {
    createCategory,
    getCategory,
    deleteCategory,
    updateCategory}=require("../controllers/categoryController");

    const router = express.Router();

// Kategori oluşturma (POST isteği)
router.post('/', createCategory);

// Kullanıcının tüm kategorilerini getirme (GET isteği)
router.get('/', getCategory);

// Belirli bir kategoriyi silme (DELETE isteği)
router.delete('/:id', deleteCategory);

// Belirli bir kategoriyi güncelleme (PUT isteği)
router.put('/:id', updateCategory);

module.exports = router;