let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let CrawlerSchema = new Schema({

}, {timestamps : true});

let CrawlerPost = mongoose.model('CrawlerPost', CrawlerSchema);

module.exports = CrawlerPost;
