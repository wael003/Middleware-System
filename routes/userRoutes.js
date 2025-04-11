// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const generateToken = require('../utils/generateToken'); // استيراد دالة توليد التوكن
const UserControlle = require('../controllers/userController')


router.get('/users' , UserControlle.getUsers)
router.post('/login',UserControlle.LogInUser);

module.exports = router;