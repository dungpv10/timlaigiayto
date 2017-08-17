let User = require('../models/User');

let Hash = require('./Hash');

let async = require('async');
let Auth = {
    login: (data = {email : '', password : ''}) => {
        async.waterfall([
            function(callback){
                Hash.generate(data.password).then(hashPassword => callback(null, callback)).catch(err => callback(err))
            }

        ], function(err, results){
            if(err) return console.log(err);

            console.log(results);
        });
    }
};


module.exports = Auth;