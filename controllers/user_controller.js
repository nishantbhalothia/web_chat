const User = require('../models/user');

module.exports.signUp =async (req, res)=>{
    return res.render('signUp');
}

module.exports.signIn =async (req, res)=>{
    return res.render('signIn');
}

module.exports.create = async (req, res) => {
    console.log("Request dot body *************** \n",req.body);
    try {
        if (req.body.password !== req.body.confirm_password) {
            return res.status(400).json({ status: 'error', message: 'Passwords do not match' });
            // return res.redirect('back');
        }

        let user = await User.findOne({ username: req.body.username });

        if (user) {
            return res.status(409).json({ status: 'error', message: 'User already exists' });
            // return res.redirect('/users/signIn');
        }

        const userCreated =await User.create(req.body);
        console.log("User created *************** \n",userCreated);

        return res.status(200).json({ status: 'success', message: 'User created successfully' });
        // return res.redirect('/users/signIn');
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
};



