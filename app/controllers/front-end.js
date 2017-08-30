const Post = require('../models/Post');
let router = {
	index : (req, res) => {
		Promise.all([
			Post.getNewPosts({}, 1)
		]).then(data => {
            res.render('front-end/home/index', {posts : data[0]});
		}).catch(err => console.log(err));
	},

	upload : (req, res) => res.render('front-end/upload/index')

};

module.exports = router;
