let mongoose = require('mongoose');


let Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    roles : [{type : Schema.ObjectId, ref : 'Role'}]
}, {timestamps: true});


let User = mongoose.model('User', UserSchema);
module.exports = User;