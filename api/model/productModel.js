const mongoose = require("mongoose");
const {BASE_URL} = require("../config")
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        category:{type:Schema.Types.ObjectId, ref:"Category"},
        subcategory:{type:Schema.Types.ObjectId, ref:"Subcategory"},
        productname:{type:String},
        price:{type:Number},
        description:{type:String},
        image:{ type:String,
            get:(image)=>{
                return `${BASE_URL}${image}`;
            }

        },
        // images:{type:Schema.Types.ObjectId, ref:"Slider"}
    },
    {
        timestamps:true,
        toJSON:{getters:true}
    }
)

const Product = mongoose.model("Product",productSchema)
module.exports = Product;