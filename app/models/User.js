const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const func = require('../libs/functions');

const async = require('async');
const bcrypt = require('bcrypt');

const saltRounds = 10;

let UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    status : {type: String, required : true, default : 0},
    role : {type : Schema.ObjectId, ref : 'Role'}
}, {timestamps: true});


UserSchema.statics.insert = function(data){
    return new Promise((resolve, reject) => {
        let user = new this(data);

        user.save(function(err){
            if(err) reject(err);
            else resolve();
        });
    });
};

UserSchema.statics.getAll = function(){
    return new Promise((resolve, reject) => {
        this.find({}).populate('role').exec(function(err, users) {
            if(err) reject(err);
            else resolve(users);
        });
    });
};

UserSchema.statics.findOneById = function(id){
    return new Promise((resolve, reject) => {
        this.findById(id, (err, user) => {
            if(err) reject(err);
            else resolve(user);
        });
    });
};

UserSchema.statics.updateById = function(id, data){
    async.waterfall([
        function(callback){
            callback(null, id);
        }
    ], function(err, result){
        console.log(result);
    });
};

UserSchema.virtual('fullName').get(function(){
    return this.firstName + ' ' + this.lastName;
});


UserSchema.virtual('statusName').get(function(){
    return func.getUserStatusName(this.status);
});


let User = mongoose.model('User', UserSchema);
module.exports = User;