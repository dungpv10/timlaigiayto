const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const _ = require('lodash');
const EmailSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    email: {type: String, required: true}
}, {timestamps: true});


EmailSchema.statics.countNewRegister = function (filterDate) {
    return new Promise((resolve, reject) => {
        let condition = {status : 1};
        if(!_.isEmpty(filterDate)) condition = _.extend(condition, {createdAt : {$gte : filterDate.start, $lte : filterDate.end}});
        this.count(condition, (err, count) => {
            if(err) reject(err);
            else resolve(count);
        });
    });
};


const EmailRegister = mongoose.model('EmailRegister', EmailSchema);

module.exports = EmailRegister;