const express = require('express');
const router = express.Router();

console.log('Root index for Routes got kiccked in')

const homeController = require('../controllers/home_controller')



router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/contacts', require('./contacts'));

module.exports = router;