const express = require('express');
const {adminController, userController, categoryController, subcatController, productController} = require('../controller');
const multer = require('multer');
const path = require("path");
// const productController = require('../controller/productController');



const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, "upload/category/image/")
    },

    filename: function (req, file, cb ) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage})

router.post("/admin",adminController.store)
router.get("/admin",adminController.show)

router.post("/user",userController.store);
router.get("/user",userController.show);

router.post("/category",categoryController.store)
router.get("/category",categoryController.show);
router.delete("/category/:id",categoryController.delete);

router.post("/product",upload.single("image"),productController.store);
router.get("/product",productController.show);
router.delete("/product/:id",productController.delete);

router.get("/product",productController.find)

router.post("/subcat",subcatController.store);
router.get("/subcat",subcatController.show);
router.get("/subcat/populate",subcatController.display);


module.exports = router;
