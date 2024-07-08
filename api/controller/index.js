const adminController =  require("./adminController")
const categoryController = require("./categoryController")
const subcatController = require("./subcategoryController")
const productController = require("./productController")
const sliderController = require("./sliderController")
const loginController = require("./auth/loginController")
const userController = require("./auth/userController")



module.exports = { adminController,userController, productController, categoryController, subcatController,sliderController, loginController }
