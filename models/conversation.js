const mongoose = require('mongoose');
const Message = require('./message');
const User = require('./user');

// Define conversation schema
const conversationSchema = new mongoose.Schema({
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
  }]
});

// Define Conversation Schema
// const conversationSchema = new mongoose.Schema({
//     participants: [{
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User'
//     }],
//     messages: [messageSchema]
//   });

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;