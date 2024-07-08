const Slider = require("../model/sliderModel")

const sliderController = {

    async enter(req,res,next) {
        let product;
        try{
            const { image } = req.body;
            product = await Slider.create({ image:"upload/slider/image/" +req.file.filename })
          
        }
        catch(error) {
            res.status(404).json({ error:"Server Error ", serverError:error })
        }
        res.status(200).json(product)
    },

    async show(req,res,next) {
        let display;
        try{
            display = await Slider.find()
        }
        catch(error){
            res.status(401).json({ error:"Server Error ", serverError:error })
        }
        res.status(200).json(display)
    }
}

module.exports = sliderController