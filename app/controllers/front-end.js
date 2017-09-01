const Post = require('../models/Post');
const Category = require('../models/Category');
const postStatus = require('../../configs/params').postStatus;
const provinces = require('../../configs/provinces');
const Str = require('../libs/Str');
let router = {
	index : (req, res) => {
		Promise.all([
			Post.getNewPosts({}, 1)
		]).then(data => {
            res.render('front-end/home/index', {posts : data[0]});
		}).catch(err => console.log(err));
	},

	upload : (req, res) => {
		Promise.all([
			Category.getAll()
		]).then(data => res.render('front-end/upload/index', {categories : data[0], post: data[1], postStatus : postStatus, provinces : provinces})).catch(err => console.log(err));
    },
	postUpload : (req, res) => {
		Post.insert(req.body).then(post => res.redirect('/')).catch(err => console.log(err));
	},


	//Love
    getLove : (req, res) => {
		res.render('front-end/love/index');
	},

    getLoveCrush : (req, res) => {
		res.render('front-end/love/detail');
	}

};

module.exports = router;
