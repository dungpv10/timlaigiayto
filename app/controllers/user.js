let User = require('../models/User');

module.exports = {
    index : (req, res) => {
        res.render('admin/user/index');
    },
    getCreate : (req, res) => {
        res.render('admin/user/create');
    },
    postCreate : (req, res) => {

    }
};