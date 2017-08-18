
let Auth = require('../libs/Auth');
let LoginController = {
    index: (req, res) => {
        if(req.session.userLogged) return res.redirect('/admin');
        res.render('auth/login');
    },

    postLogin: (req, res) => {
        Auth.login({email : req.body.email, password : req.body.password}, (result, user) => {
            if(!result) return res.redirect('/admin/login');
            req.session.userLogged = user;
            res.redirect('/admin');
        });
    }
};

module.exports = LoginController;
