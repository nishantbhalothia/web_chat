const mongoose = require('mongoose');

// Define Contact Schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  number: {
    type: Number,
    required: true
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;