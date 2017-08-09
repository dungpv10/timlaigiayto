let mongoose = require('mongoose');



let Schema = new Schema;

let RoleSchema = Schema({
    name : {type : String, required : true, unique: true}
}, {timestamps : true});


let Role = mongoose.model('Role', RoleSchema);

module.exports = Role;