let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let func = require('../libs/functions');

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

PostSchema.virtual('statusName').get(function () {
    return func.getPostStatusName(this.status);
});

let Post = mongoose.model('Post', PostSchema);

module.exports = Post;