let app = {
    init : () => {
        return new Promise((resolve, reject) => {
            try{
                let mongoose = require('mongoose');
                mongoose.Promise = global.Promise;
                const connection = mongoose.connect('mongodb://localhost/timlaigiayto');
                resolve(connection);
            }catch(err){
                return reject(err);
            }
        });

    }
};

module.exports = app;
