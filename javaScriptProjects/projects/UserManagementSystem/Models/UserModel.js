const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
userName:{
    type:String,
    required :true
},
email:{
    type:String,
    required :true,
    unique : true
},
password:{
    type:String,
    required:true
}
},{timestamps:true});
const user = mongoose.model('UserMangement',userSchema);

module.exports= user;