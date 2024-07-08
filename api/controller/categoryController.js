const Category = require("../model/categoryModel");

const categoryController = {

    async store(req,res,next) {
        let add;
        try{
            const { category } = req.body
            add = await Category.create({ category, image:"upload/category/image/"+req.file.filename })
        }
        catch (error){
            res.status(401).json({ error:" Server Error " , serverError:error} )
        }
        res.status(200).json(add)
    },

    async show(req,res,next) {
        let display;
        try{
            display = await Category.find()
        }
        catch(error){
            res.status(401).json({ error:"Server Error ", serverError:error })
        }
        res.status(200).json(display)
    },

    async delete(req, res, next ) {
        let del;
        try{
            const {id} = req.params;
            del = await Category.findByIdAndDelete({ _id: id });
        }
        catch(error){
            res.status(404).json({ error:"Server Error", srverError:error })
        }
        res.status(200).json(del);
    },

    async look(req,res,next){
        let add;
        try{
            add = await Category.aggregate([
                {
                    $lookup: {
                      from: "subcategories",
                      localField: "_id",
                      foreignField: "category",
                      as: "subcategory"
                    }
                  }
            ])
        }
        catch(error){
            res.status(404).json({ error: "Server Error", serverError:error })
        }
        res.status(201).json(add);
    }
}

module.exports = categoryController;