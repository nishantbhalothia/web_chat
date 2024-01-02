const User = require('../models/user');
const jwt = require('jsonwebtoken');

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


module.exports.createSession = async (req, res) => {
    // console.log("Request dot body *************** \n",req.body);
    try {
        // const protectedUser = await User.findOne({ username: req.body.username }).select("-password -confirm_password");
        const user = await User.findOne({ username: req.body.username });
        console.log("User found *************** \n",user);
        if (!user || user.password !== req.body.password) {
            return res.status(401).json({ status: 'error', message: 'Invalid username/password' });
        }
        // req.session.user = user;
        // res.render('profile', req.session.user);
        // console.log(req.session.user)
        return res.status(200).json({ status: 'success', message: 'Logged in successfully', data: user });

        
    } catch (error) {
        console.error('Error creating session:', error);
        return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
        
    }
}


module.exports.destroySession = (req, res) => {
    req.session.destroy();
    return res.status(200).json({ status: 'success', message: 'Logged out successfully' });
}


module.exports.login = async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    // console.log("User found *************** \n",user);
    if (!user || user.password !== req.body.password) {
        return res.status(401).json({ status: 'error', message: 'Invalid username/password' });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);
    return res.status(200).json({ status: 'success', message: 'Logged in successfully and  JWT created', data: { token: token } });
}