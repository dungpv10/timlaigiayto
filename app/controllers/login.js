
let Auth = require('../libs/Auth');
let LoginController = {
    index: (req, res) => {
        
        if(req.session.userLogged) res.redirect('/admin');
        else res.render('auth/login');
    },

    postLogin: (req, res) => {
        Auth.login({email : req.body.email, password : req.body.password}, function(result, user){
            if(!result) res.redirect('/admin/login');
            else{
                req.session.userLogged = user;
                res.redirect('/admin');
            }
        });
    }
};

module.exports = LoginController;
