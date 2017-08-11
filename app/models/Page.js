let mongoose = require('mongoose');


let Schema = mongoose.Schema;

let Str = require('../libs/Str');

let PageSchema = new Schema({
    title: {type: String, required: true},
    slug: {type: String, unique: true},
    content: {type: String, required: true}
}, {timestamps: true});


PageSchema.statics.getAll = function () {
    return new Promise((resolve, reject) => {
        this.find({}, (err, pages) => {
            if (err) reject(err);
            else resolve(pages);
        });
    });
};


PageSchema.statics.insert = function (data) {
    return new Promise((resolve, reject) => {
        let page = new this(data);

        page.save(err => {
            if (err) reject(err);
            else resolve(page);
        });
    });
};


PageSchema.pre('save', function (next) {
    this.slug = Str.slugify(this.title);
    next();
});

let Page = mongoose.model('Page', PageSchema);

module.exports = Page;