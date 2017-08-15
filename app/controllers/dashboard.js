let Post = require('../models/Post');
let EmailRegister = require('../models/EmailRegister');


let Mailer = require('../libs/Mailer');


let dashboardController = {
    index : (req, res) => {
        let today = {
            start : new Date(),
            end : new Date()
        };
        let filterDate = {
            start : (req.query.start_date ? new Date(req.query.start_date) : today.start).setHours(0, 0, 0, 0),
            end : (req.query.end_date ? new Date(req.query.start_date) : today.end).setHours(23, 59, 59, 999)
        };

        Promise.all([
            Post.countNewPost(filterDate),
            EmailRegister.countNewRegister(filterDate),
            Post.getNewPosts(filterDate),
            EmailRegister.countNewRegister(filterDate)
        ]).then(data => {
            res.render('admin/dashboard/index', {
                total : {
                    posts : data[0], emailRegister : data[1]
                },
                listData : {
                    posts : data[2], emails : data[3]
                }
            });
        }).catch(err => console.log(err));
    },

    sendMail : (req, res) => {
        (new Mailer(req.body)).sendMail().then(info => res.redirect('back')).catch(err => console.log(err));
        res.redirect('back')
    }
};



module.exports = dashboardController;