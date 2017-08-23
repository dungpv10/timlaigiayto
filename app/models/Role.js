let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let RoleSchema = Schema({
    name: {type: String, required: true, unique: true}
}, {timestamps: true});


RoleSchema.statics.getAll = function () {
    return new Promise((resolve, reject) => {
        this.find({}, function (err, roles) {
            if (err) reject(err);
            else resolve(roles);
        });
    });
};

RoleSchema.statics.findOneById = function (id) {
    return new Promise((resolve, reject) => {
        this.findById(id, function (err, role) {
            if (err) reject(err);
            else resolve(role);
        });
    });
};

RoleSchema.statics.updateById = function (id, data) {
    return new Promise((resolve, reject) => {
        this.findByIdAndUpdate(id, data, (err, role) => {
            if (err) reject(err);
            else resolve(role);
        });
    });
};

RoleSchema.statics.delete = function (id) {
    return new Promise((resolve, reject) => {
        this.findByIdAndRemove(id, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
};

RoleSchema.statics.selectBox = function(){
    let data = [];
    return new Promise((resolve, reject) => {
        this.getAll().then(roles => {
            roles.forEach(role => {
                data.push({
                    id : role._id,
                    name : role.name
                });
            });
            resolve(data);
        }).catch(err => {
            reject(err);
        });
    });
};

let Role = mongoose.model('Role', RoleSchema);

module.exports = Role;