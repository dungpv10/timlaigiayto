
let Auth = require('../libs/Auth');
let LoginController = {
    index: (req, res) => {
        if(req.session.userLogged !== null) res.redirect('/admin');
        else res.render('auth/login');
    },

    postLogin: (req, res) => {
        Auth.login({email : req.body.email, password : req.body.password}, (result) => {
            if(result === false) res.redirect('/admin/login');
            else {
                req.session.userLogged = result || null;
                res.redirect('/admin');
            }
        });
    }
};

module.exports = LoginController;
