let User = require('../models/User');

let Hash = require('./Hash');

let async = require('async');

const findByEmail = (email) => {
    return new Promise((resolve, reject) => {
        if(email === '') return reject(null);
        User.findOne({email : email}, (err, user) => {
            if(err) return reject(err);
            return resolve(user);
        });
    });

};
let Auth = {
    login: (data = {email: '', password: ''}, cb) => {
        async.waterfall([
            (callback) => {
                findByEmail(data.email).then(user => callback(null, user)).catch(err => callback(err));
            },
            (user, callback) => {
                Hash.compare(data.password, user.password).then(hasUser => callback(null, hasUser)).catch(err => callback(err));
            }
        ], function (err, result) {
            if(err) console.log(err);
            else return cb(result);
        });
    }
};

module.exports = Auth;
