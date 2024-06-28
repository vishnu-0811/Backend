const bcrypt = require("bcrypt");
const User = require('../model/userModel');

const userController = {

    async store(req, res, next) {
        let add ;
        try{
            const {fullname,email,mobile,password} = req.body;

            const emailExist = await User.findOne( {email:email });

            if(emailExist) {
                return res.status(401).json("Email already exist");
            }

            const hashPassword = await bcrypt.hash(password,10);    

            add = await User.create({fullname,email,mobile,password:hashPassword });
        }
        catch(error){
            res.status(404).json({error:"Server Error", serverError:error })
        }
        res.status(201).json(add);
    },

    async show(req,res,next) {
        let display;
        try{
            display = await User.find()
        }

        catch(error){
            res.status(404).json({error:"Server Error", serverError:error })
        }
        res.status(200).json(display);
    }
}

module.exports = userController;