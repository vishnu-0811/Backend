const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { BASE_URL } = require("../config")

const productSchema = new Schema (
    {
        category:{type:Schema.Types.ObjectId, ref:"Category"},
        subcategory:{type:Schema.Types.ObjectId, ref:"Subcategory"},
        productname:{type:String},
        price:{type:String},
        description:{type:String},
        image:{type:String,
            get:(image) => {
                return `${BASE_URL}${image}`;
            }
        },
    },
    {
        timestamps:true,
        toJSON: {getters:true},
    }
)

const Product = mongoose.model("Product",productSchema)
module.exports = Product