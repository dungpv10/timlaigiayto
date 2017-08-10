const Category = require('../models/Category');
let CategoryController = {
    index : (req, res) => {
        Category.getAll().then(categories => {
            res.render('admin/category/index', {categories : categories});
        }).catch(err => console.log(err));
    },

    getCreate : (req, res) => {
        res.render('admin/category/create');
    },

    postCreate : (req, res) => {
       Category.insert(req.body).then(category => res.redirect('/admin/categories')).catch(err => console.log(err));
    },

    getEdit : (req, res) => {
        Category.findOneById(req.params.id).then(category => res.render('admin/category/edit', {category : category})).catch(err => console.log(err));
    },

    postUpdate : (req, res) => {
        Category.findAndUpdate(req.body.id, req.body).then(category => {res.redirect('/admin/categories')}).catch(err => console.log(err));
    },

    destroy : (req, res) => {
        Category.destroy(req.body.id).then(() => res.redirect('/admin/categories')).catch(err => console.log(err));
    }
};


module.exports = CategoryController;