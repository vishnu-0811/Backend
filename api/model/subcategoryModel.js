const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subcategoryController = new Schema (
    {
        category:{ type: Schema.Types.ObjectId, ref:"Category" },
        subcategory:{type:String},
    },
    {
        timestamps:true,
    }
)

const Subcategory = mongoose.model("Subcategory",subcategoryController);
module.exports = Subcategory;
