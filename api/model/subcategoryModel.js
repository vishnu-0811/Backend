const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subcategoryController = new Schema (
    {
        category:{ type: Schema.Types.ObjectId, ref:"Category" },
        subcategory:{type:String},
        image:{ type:String,
            get:(image)=>{
                return `${BASE_URL}${image}`;
            }

        }
    },
    {
        timestamps:true,
        toJSON:{getters:true}
    }
)

const Subcategory = mongoose.model("Subcategory",subcategoryController);
module.exports = Subcategory;
