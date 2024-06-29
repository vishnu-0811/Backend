const Product = require("../model/productModel");
// const { store } = require("./adminController");


const productController = {

    async store(req, res) {
        let pro;
        try{
            const { category,subcategory, productname, price, description} = req.body;
            pro = await Product.create({ category,subcategory, productname, price, description, image: "upload/category/image/" +req.file.filename });
        }
        catch(error){
            res.status(404).json({ error:"Server Error", serverError:error })
        }
        res.status(201).json(pro);
    },

    async show(req, res)  {
        let display;
        try{
            display = await Product.find();
        }
        catch(error){
            res.status(404).json({ error:"Server Error", serverError:error })
        }
        res.status(200).json( display );
    },

    async show(req, res)  {
        let display;
        try{
            display = await Product.find().populate("category,subcategory");
        }
        catch(error){
            res.status(404).json({ error:"Server Error", serverError:error })
        }
        res.status(200).json( display );
    },

    async find(req,res) {
        let show;
        try{
            const { saree } = req.params;
            show = await Product.find({subcategory:saree  });
        }
        catch(error){
            res.status(404).json({error:"Server Error", serverError:error} )
        }
        res.status(200).json(show)
    },

    async delete(req,res,next) {
        let del;
        try{
            const { id } = req.params;
            del = await Product.findByIdAndDelete({ _id:id });
        }
        catch (error) {
            res.status(404).json({ error:"Server Error", serverError:error })
        }
        res.status(200).json(del);
    }
}

module.exports = productController;