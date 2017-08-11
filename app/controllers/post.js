const async = require('async');

const Category = require('../models/Category');

const postStatus = require('../../configs/params').postStatus;
const provinces = require('../../configs/provinces');

const Post = require('../models/Post');
let PostController = {
    index : (req, res) => {
        Post.getAll().then(posts => res.render('admin/post/index', {posts : posts})).catch(err => console.log(err));
    },

    getCreate : (req, res) => {
        Promise.all([
            Category.getAll()
        ]).then(data => res.render('admin/post/create', {categories : data[0], postStatus : postStatus, provinces : provinces})).catch(err => console.log(err));
    },

    postCreate: (req, res) => {
        Post.insert(req.body).then(post => res.redirect('/admin/posts')).catch(err => console.log(err));
    },

    getEdit : (req, res) => {
        Promise.all([
            Category.getAll(),
            Post.findOneById(req.params.id)
        ]).then(data => res.render('admin/post/edit', {categories : data[0], post: data[1], postStatus : postStatus, provinces : provinces})
        ).catch(err => console.log(err));
    },

    postUpdate : (req, res) => {
        Post.update(req.body.id, req.body).then(post => res.redirect('/admin/posts')).catch(err => console.log(err));
    },

    destroy : (req, res) => {
        Post.delete(req.body.id).then(post => {res.redirect('/admin/posts')}).catch(err => console.log(err));
    }
};


module.exports = PostController;