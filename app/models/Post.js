let mongoose = require('mongoose');

let Schema = mongoose.Schema;


let PostSchema = new Schema({
    title : {type: String, required : true},
    slug : {type : String, unique : true},
    fullName : {type : String, required : true},
    numberPhone : {type : String, required : true},
    email : {type : String, required : true},
    position : {type : String},
    content : {type : String},
    categoryId : {type : Schema.Types.ObjectId, ref : 'Category'}
}, {timestamps : true});



let Post = mongoose.model('Post', PostSchema);

module.exports = Post;