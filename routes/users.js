const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller')

router.post('/create', userController.create);


router.get('/signIn', userController.signIn);
router.get('/signUp', userController.signUp);

module.exports = router;