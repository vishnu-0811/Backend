const Subcategory = require("../model/subcategoryModel");

const subcatController = {

    async store(req,res) {
        let sub;
        try{
            const { category, subcategory } = req.body;
            sub = await Subcategory.create({ category, subcategory });
        }
        catch( error ){
            res.status(404).json({ error:"Server Error", serverError:error });
        }
        res.json({status:200,sub});
    },

    async show(req,res) {
        let display;
        try{
            display = await Subcategory.find();
        }
        catch(error){
            res.status(404).json({ error:"Server Error", serverError:error });
        }
        res.status(201).json(display);
    },

    async display(req,res) {
        let show;
        try{
            show = await Subcategory.find().populate("category");
        }
        catch(error) {
            res.status(404).json({error:"Server Error", serverError:error });
        }
        res.status(200).json(show);
    }

}

module.exports = subcatController;