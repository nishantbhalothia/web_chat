const Contact = require('../models/contacts');

module.exports.contacts =async function(req, res){
    const contacts =await Contact.find({});
    console.log('contacts_controller : contacts : ', contacts);
    res.json(200, {
        message: "List of contacts",
        contacts: contacts
    });
}