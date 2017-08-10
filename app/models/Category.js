let Post = require('./Post');

let mongoose = require('mongoose');

let Schema = mongoose.Schema;


let Str = require('../libs/Str');
let CategorySchema = new Schema({
    name: {type: String, required: true, unique: true},
    slug: {type: String},
    description: {type: String}
}, {timestamps: true});

CategorySchema.statics.insert = function (data) {
    return new Promise((resolve, reject) => {
        let category = new this(data);
        category.save((err) => {
            if (err) reject(err);
            else resolve(category);
        });
    });

};

CategorySchema.statics.getAll = function () {
    return new Promise((resolve, reject) => {
        this.find({}, function (err, categories) {
            if (err) reject(err);
            else resolve(categories);
        });
    });
};


CategorySchema.statics.findOneById = function (id) {
    return new Promise((resolve, reject) => {
        this.findById(id, (err, category) => {
            if (err) reject(err);
            else resolve(category);
        });
    });
};


CategorySchema.statics.findAndUpdate = function(id, data){
    return new Promise((resolve, reject) => {
        this.findByIdAndUpdate(id, data, (err, category) => {
            if(err) reject(err);
            else resolve(category);
        });
    });
};


CategorySchema.statics.destroy = function (id) {
    return new Promise((resolve, reject) => {
        this.findByIdAndRemove(id, function (err, category) {
            if (err) reject(err);
            else {
                Post.remove({categoryId: category._id});
                resolve();
            }
        });
    });
};

CategorySchema.pre('save', (next) => {
    this.slug = Str.slugify(this.name);
    next();
});


// CategorySchema.post('find', (category) => {
//     category[0].slug = Str.slugify(category[0].name);
// });

let Category = mongoose.model('Category', CategorySchema);

module.exports = Category;