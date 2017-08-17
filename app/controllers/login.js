
let Auth = require('../libs/Auth');
let LoginController = {
    index: (req, res) => {
        res.render('auth/login');
    },

    postLogin: (req, res) => {
        Auth.login(req.body);
    }
};

module.exports = LoginController;
