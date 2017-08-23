let bcrypt = require('bcrypt');


let saltRounds = 10;


let Hash = {
    generate : (password) => {
        return new Promise(function(resolve, reject) {
            bcrypt.genSalt(saltRounds, function(err, salt) {
                if(err) reject(err);
                bcrypt.hash(password, salt, function(err, hashPassword){
                    if(err) reject(err);
                    else resolve(hashPassword);
                });
            });
        });
    },
    compare : (password, hashPassword) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hashPassword,(err, result) =>{
                if(err) reject(err);
                else resolve(result);
            });
        });

    }
};

module.exports = Hash;