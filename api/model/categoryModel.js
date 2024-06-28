const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categoryController = new Schema (
    {
        category:{type:String}
        // name:{type:String},
        // email:{type:String},
    },
    {
        timestamps:true,
    }
);

const Category = mongoose.model("Category",categoryController);

module.exports = Category;