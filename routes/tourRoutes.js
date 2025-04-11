// routes/tourRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const allowRoles = require('../middlewares/roles');
const tourController = require('../controllers/tourControllers'); // استيراد الـ controller

router.get('/', tourController.getTour);  // استخدام الـ controller
router.post('/', auth, allowRoles('admin'), tourController.createTour);  // استخدام الـ controller

module.exports = router;