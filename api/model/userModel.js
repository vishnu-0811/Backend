const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        fullname:{type:String},
        email:{type:String},
        mobile:{type:String},
        password:{type:String}
    },
    
    {
        timestamps:true,
    }
);

const User = mongoose.model("User",userSchema);
module.exports = User;