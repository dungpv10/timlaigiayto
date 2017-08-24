const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const _ = require('lodash');
const EmailSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    status: {type: Number, default: 0},
    email: {type: String, required: true}
}, {timestamps: true});

EmailSchema.statics.getQuery = function(filterDate){
    let condition = {status: 0};
    return !_.isEmpty(filterDate) ? _.extend(condition, {createdAt : {$gte : filterDate.start, $lte : filterDate.end}}) : condition;
};

EmailSchema.statics.countNewRegister = function (filterDate) {
    return new Promise((resolve, reject) => {
        this.count(this.getQuery(filterDate), (err, count) => {
            if(err) reject(err);
            else resolve(count);
        });
    });
};

EmailSchema.statics.getNewEmailRegister = function(filterDate){
    return new Promise((resolve, reject) => {
        this.find(this.getQuery(filterDate)).limit(10).exec((err, emails) => {
            if(err) reject(err);
            else resolve(emails);
        });
    });
};


EmailSchema.statics.getAll = function(){
    return new Promise((resolve, reject) => {
        this.find({}, (err, emails) => {
            if (err) return reject(err);
            return resolve(emails);
        });
    });
}

const EmailRegister = mongoose.model('EmailRegister', EmailSchema);

module.exports = EmailRegister;