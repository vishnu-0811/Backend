const Product = require("../model/productModel");
const { display } = require("./subcategoryController");

const productController = {
    
    async enter(req,res,next) {
        let product;
        try{
            const { category,subcategory,productname,price,description} = req.body;
            product = await Product.create({category,subcategory,productname,price,description, image:"upload/category/image/" +req.file.filename })
          
        }
        catch(error) {
            res.status(404).json({ error:"Server Error ", serverError:error })
        }
        res.status(200).json(product)
    },

    async display(req,res) {
        let show;
        try{
            show = await Product.find().populate("category").populate("subcategory");
        }
        catch(error){
            res.status(404).json({ error:"Server Error", serverError:error})
        }
        res.status(200).json(show);
    },

    async delete(req, res ) {
        let del;
        try{
            const {id} = req.params;
            del = await Product.findByIdAndDelete({ _id: id });

        }
        catch(error){
            res.status(404).json({ error:"Server Error", srverError:error })
        }
        res.status(200).json(del);
    }

    
}

module.exports = productController;