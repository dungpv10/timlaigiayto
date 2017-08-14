const Post = require('../models/Post');
let StatisticController = {
    index : (req, res) => {
        res.render('admin/statistic/index');
    },
    getPosition: (req, res) => {
        Post.getByPosition().then(results => {
            console.log(results);
            res.render('admin/statistic/position');
        }).catch(err => console.log(err));

    },

    getCategory: (req, res) => {
        res.render('admin/statistic/category');
    },

    getDate: (req, res) => {
        res.render('admin/statistic/date');
    }
};

module.exports = StatisticController;