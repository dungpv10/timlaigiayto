let User = require('../models/User');

let Hash = require('./Hash');

let async = require('async');

const findByEmail = (email) => {
    return new Promise((resolve, reject) => {
        if (email === '') return reject(null);
        User.findOne({email: email}, (err, user) => {
            if (err) return reject(err);
            return resolve(user);
        });
    });

};
let Auth = {
    login: (data = {email: '', password: ''}, cb) => {
        async.waterfall([
            (callback) => findByEmail(data.email).then(user => callback(null, user)).catch(err => callback(err)),
            (user, callback) => Hash.compare(data.password, user.password).then(result => {
                callback(null, result, user)
            }).catch(err => callback(err))
        ], function (err, result, user) {
            if (err) return console.log(err);
            return cb(result, user);
        });
    }
};

module.exports = Auth;
