let Page = require('../models/Page');

let page = {
    index : (req, res) => {
        Page.getAll().then(pages => res.render('admin/page/index', {pages : pages, domain : req.headers.host})).catch(err => console.log(err));
    },

    getCreate : (req, res) => {
        res.render('admin/page/create');
    },

    postCreate : (req, res) => {
        Page.insert(req.body).then(page => res.redirect('/admin/pages')).catch(err => console.log(err));
    }
};


module.exports = page;