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

UserSchema.statics.genPassword = function(password){
    if(password === '') return '';
    return new Promise(function(resolve, reject) {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) reject(err);
            bcrypt.hash(password, salt, function(err, hashPassword){
                if(err) reject(err);
                else reject(hashPassword);
            });
        });
    });
};

UserSchema.statics.updateById = function(id, data){
    async.waterfall([
        (callback) => {
            this.genPassword(data.password).then(hashPassword => {
                data.password = hashPassword;
                callback(null, data);
            }).catch(err => {
                callback(new Error('Waterfall fail ' + err.message));
            });
        },
        (data, callback) => {
            console.log('fun 2 : ' + data);
            callback(null, data);
        }
    ], (err, result) => {
        console.log('Result : ' + result);
    });
};


UserSchema.pre('save', function(next){
    let user = this;
    if(!user.isModified()) next();
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if(err) return next(err);
        bcrypt.hash(user.password, salt, (err, hashPassword) => {
            if(err) return next(err);
            user.password = hashPassword;
            next();
        });
    });
});

UserSchema.virtual('fullName').get(function(){
    return this.firstName + ' ' + this.lastName;
});


UserSchema.virtual('statusName').get(function(){
    return func.getUserStatusName(this.status);
});


let User = mongoose.model('User', UserSchema);
module.exports = User;