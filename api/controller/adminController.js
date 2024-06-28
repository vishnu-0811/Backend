const Admin = require('../model/adminModel');



const adminController = {

    async store(req, res, next) {
        let add;
        try{
            const { name,password } = req.body;
            
            add = await Admin.create({ name, password });
        }

        catch(error) {
            res.status(404).json({ error:"Server Error", serverError:error });
        }

        res.status(201).json(add);
        console.log(add)
    },

    async show(req, res, next) {
        let display;
        try{
            display = await Admin.find();
        }

        catch(error) {
            res.status(404).json({ error:"Server Error", serverError:error })
        }

        res.status(200).json(display);
    }
};

module.exports = adminController;