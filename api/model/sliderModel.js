const mongoose = require("mongoose")
const BASE_URL = require("../config")

const Schema = mongoose.Schema

const sliderSchema = new Schema(
    {
        image: {
            type: String,
            get: (image) => {
                return `${BASE_URL}${image}`;
                // return `${BASE_URL}${image}`;
            }
        }
    },
    {
        timestamps:true,
    }
)

const Slider = mongoose.model("Slider",sliderSchema)
module.exports = Slider