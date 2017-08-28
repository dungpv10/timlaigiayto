const Category = require('../models/Category');
const Page = require('../models/Page');
const _ = require('lodash');
let FrontEndMiddleware = {
    index : () => {
        return (req, res, next) => {
            Promise.all([
                Category.getAll(),
                Page.getAll()
            ]).then (data => {
                res.locals.categoriesList = data[0];
                res.locals.pagesList = data[1];
                next();
            }).catch(err => console.log(err));
        }
    }
};


module.exports = FrontEndMiddleware;