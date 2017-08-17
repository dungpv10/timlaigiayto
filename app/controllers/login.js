
let Auth = require('../libs/Auth');
let LoginController = {
    index: (req, res) => {
        res.render('auth/login');
    },

    postLogin: (req, res) => {
        Auth.login({email : req.body.email, password : req.body.password}, (result) => {
            if(result === false) res.redirect('/admin/login');
            else req.session.userLogged = result || null;
        });
    }
};

module.exports = LoginController;
