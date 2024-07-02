const express = require('express');
const { adminController, userController, categoryController, subcatController, productController } = require('../controller');
const multer = require('multer');
const path = require("path");

const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload/category/image/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,  file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    )
    }
  })

const upload = multer({ storage: storage });

// Admin routes
router.post("/admin", adminController.store);
router.get("/admin", adminController.show);

// User routes
router.post("/user", userController.store);
router.get("/user", userController.show);

// Category routes
router.post("/category", categoryController.store);
router.get("/category", categoryController.show);
router.delete("/category/:id", categoryController.delete);


// Subcategory routes
router.post("/subcat", subcatController.store);
router.get("/subcat", subcatController.show);
router.get("/subcat/:id", subcatController.display);
router.delete("/subcat/:id",subcatController.delete)

// product route 
router.post("/product",upload.single("image"),productController.enter);
router.get("/product",productController.display)
router.delete("/product/:id",productController.delete)

module.exports = router;
