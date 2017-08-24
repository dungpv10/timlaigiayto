let User = require('../models/User');

let Hash = require('./Hash');

let async = require('async');

const findByEmail = (email) => {
    return new Promise((resolve, reject) => {
        if (email === '') return reject(null);
        User.findOne({email: email}, (err, user) => {
            if (err || !user) return reject(err);
            return resolve(user);
        });
    });

};
let Auth = {
    login: (data = {email: '', password: ''}, cb) => {
        async.waterfall([
            (callback) => findByEmail(data.email)
                .then(user => callback(null, user))
                .catch(err => callback(err)),

            (user, callback) => {
                Hash.compare(data.password, user.password)
                    .then(result => callback(null, result, user))
                    .catch(err => callback(err, null, null))
            }

        ], function (err, result, user) {
            if (err) console.log(err);
            else cb(result, user);
        });
    }
};

module.exports = Auth;
