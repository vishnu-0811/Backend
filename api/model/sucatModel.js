const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { BASE_URL } = require("../config")

const productSchema = new Schema (
    {
        subcategory:{type:String},
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