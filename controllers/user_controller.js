const User = require('../models/user');

module.exports.signUp =async (req, res)=>{
    return res.render('signUp');
}

module.exports.signIn =async (req, res)=>{
    return res.render('signIn');
}

module.exports.create = async (req, res)=>{
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    let user =await User.findOne({email: req.body.email});
    // if userr already exist then redirect to sign in page
    if(user){
        // return res.redirect('back');
        return res.redirect('/users/signIn');
    }
    // if user not exist then create user
    await User.create(req.body);
    return res.redirect('/users/signIn');

}

