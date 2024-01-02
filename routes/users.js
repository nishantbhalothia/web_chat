const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller')

router.post('/create', userController.create);


router.get('/signIn', userController.signIn);
router.get('/signUp', userController.signUp);

router.post('/create-session', userController.createSession);
router.post('/login', userController.login);
router.get('/sign-out', userController.destroySession);

module.exports = router;