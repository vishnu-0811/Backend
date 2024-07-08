const express = require('express');
const { adminController, userController, categoryController, subcatController, productController, sliderController, loginController } = require('../controller');
const multer = require('multer');
const path = require("path");
const auth = require('../middleware/auth');

const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload/product/image/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,  file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    )
    }
  })
  const upload = multer({ storage: storage });


  const storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload/slider/image/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,  file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    )
    }
  })
  const slider = multer({ storage: storage2 });

  const categoryimage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload/category/image/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,  file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    )
    }
  })
  const catimg = multer({ storage: categoryimage });

  const subcatimage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload/subcategory/image/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,  file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    )
    }
  })
  const subcatimg = multer({ storage: subcatimage });


// Admin routes
router.post("/admin", adminController.store);
router.get("/admin", adminController.show);

// User routes
router.post("/user", userController.store);
router.get("/user", userController.show);

//User Login route
// router.get("/login", userController.login);
router.post("/login",loginController.login)

// Category routes
router.post("/category",catimg.single("image"), categoryController.store);
router.get("/category",auth, categoryController.show);
router.delete("/category/:id", categoryController.delete);
router.get("/category/sub",categoryController.look)


// Subcategory routes
router.post("/subcat",subcatimg.single("image"), subcatController.store);
router.get("/subcat", subcatController.show);
router.get("/subcat/:id", subcatController.display);
router.delete("/subcat/:id",subcatController.delete)

// product route 
router.post("/product",upload.single("image"),productController.enter);
router.get("/product",productController.display)
router.delete("/product/:id",productController.delete)
router.get("/product/:id", productController.sortwithid);


// router.post("/slider", slider.array("images", 10), sliderController.enter); 
router.post("/slider", slider.array("image", 10), sliderController.enter);
// const cpUpload = slider.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
router.get("/slider",sliderController.show);

module.exports = router;
