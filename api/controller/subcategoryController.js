const Subcategory = require("../model/subcategoryModel");

const subcatController = {

    async store(req,res) {
        let sub;
        try{
            const { category, subcategory } = req.body;
            sub = await Subcategory.create({ category, subcategory, image:"upload/subcategory/image/" +req.file.filename });
        }
        catch( error ){
            res.status(404).json({ error:"Server Error", serverError:error });
        }
        res.json({status:200,sub});
    },

    async show(req,res) {
        let display;
        try{
            display = await Subcategory.find().populate("category");
        }
        catch(error){
            res.status(404).json({ error:"Server Error", serverError:error });
        }
        res.status(201).json(display);
    },

    async display(req,res) {
        let show;
        try{
            const {id} = req.params;
            show = await Subcategory.find({category : id }).populate("category");
            console.log(id)
        }
        catch(error) {
            res.status(404).json({error:"Server Error", serverError:error });
        }
        res.status(200).json(show);
    },



    async delete(req, res ) {
        let del;
        try{
            const {id} = req.params;
            del = await Subcategory.findByIdAndDelete({ _id: id });

        }
        catch(error){
            res.status(404).json({ error:"Server Error", srverError:error })
        }
        res.status(200).json(del);
    }

}

module.exports = subcatController;