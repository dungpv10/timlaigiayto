let Post = require('../models/Post');
let EmailRegister = require('../models/EmailRegister');
let dashboardController = {
    index : (req, res) => {
        Promise.all([
            Post.countNewPost(),
            EmailRegister.countNewRegister(),
            Post.getNewPosts()
        ]).then(data => {
            res.render('admin/dashboard/index', {
                total : {
                    posts : data[0], emailRegister : data[1]
                },
                listData : {
                    posts : data[2]
                }
            });
        }).catch(err => console.log(err));
    }
};



module.exports = dashboardController;