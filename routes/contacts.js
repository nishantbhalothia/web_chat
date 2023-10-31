const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts_controller')

router.get('/', contactsController.contacts); // contacts is a function we export from contacts_controller.js in controllers folder

module.exports = router;