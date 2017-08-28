const Post = require('../models/Post');
let router = {
	index : (req, res) => {

		res.render('front-end/home/index');
	},

	upload : (req, res) => res.render('front-end/upload/index')

};

module.exports = router;
