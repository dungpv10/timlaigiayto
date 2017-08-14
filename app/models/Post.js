const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const _ = require('lodash');

let func = require('../libs/functions');
const Str = require('../libs/Str');

let PostSchema = new Schema({
    title: {type: String, required: true},
    slug: {type: String, unique: true},
    fullName: {type: String, required: true},
    numberPhone: {type: String, required: true},
    email: {type: String, required: true},
    position: {type: String},
    content: {type: String},
    categoryId: {type: Schema.Types.ObjectId, ref: 'Category'},
    status: {type: String, default: 0},
}, {timestamps: true});


PostSchema.statics.getAll = function () {
    return new Promise((resolve, reject) => {
        this.find({}).populate('categoryId').exec((err, posts) => {
            if (err) reject(err);
            else resolve(posts);
        });
    });
};

PostSchema.statics.insert = function (data) {
    return new Promise((resolve, reject) => {
        let post = new this(data);
        post.save(function (err) {
            if (err) reject(err);
            else resolve(post);
        });
    });
};

PostSchema.statics.findOneById = function (id) {
    return new Promise((resolve, reject) => {
        this.findById(id, (err, post) => {
            if (err) reject(err);
            else resolve(post);
        });
    });
};

PostSchema.statics.update = function (id, data) {
    return new Promise((resolve, reject) => {
        delete data.id;

        this.findByIdAndUpdate(id, data, function (err, post) {
            if (err) reject(err);
            else resolve(post);
        });
    })
};

PostSchema.statics.delete = function(id){
    return new Promise((resolve, reject) => {
        this.findByIdAndRemove(id, function(err, post){
            if(err) reject(err);
            else resolve(post);
        });
    });
};


PostSchema.statics.getByPosition = function(){
    return new Promise((resolve, reject) => {
        this.aggregate([{
            $group : {
                _id : '$position',
                count: {$sum : 1}
            }
        }], function(err, results){
            if(err) reject(err);
            else{
                resolve(results);
            }
        });
    });

};


//Count new article today
PostSchema.statics.countNewPost = function(dateFilter = {}){
    return new Promise((resolve, reject) => {
        let condition = {status : 1};
        if(!_.isEmpty(dateFilter)) condition = _.extend(condition, {createdAt : {$gte : dateFilter.start, $lte : dateFilter.end}});

        this.count(condition, (err, count) => {
            if(err) reject(err);
            else resolve(count);
        });
    });
};


PostSchema.statics.getNewPosts = function(dateFilter = {}){
    return new Promise((resolve, reject) => {
        let condition = {status : 1};
        if(!_.isEmpty(dateFilter)) condition = _.extend(condition, {createdAt : {$gte : dateFilter.start, $lte : dateFilter.end}});
        this.find(condition).populate('categoryId').limit(10).exec((err, posts) => {
            if(err) reject(err);
            else resolve(posts);
        });
    });
};


PostSchema.virtual('statusName').get(function () {
    return func.getPostStatusName(this.status);
});


PostSchema.pre('save', (next) => {
    this.slug = Str.slugify(this.name);
    next();
});

let Post = mongoose.model('Post', PostSchema);

module.exports = Post;