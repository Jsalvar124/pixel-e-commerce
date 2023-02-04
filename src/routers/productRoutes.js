const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

//controller
let productController = require('../controllers/productController');
let productControllerDb= require('../controllers/productControllerDb')

//apis
let productDashboard = require('../data/apis/productDashboard')

//express-validator-middlewares
const validationsAddProduct=require('../../middlewares/validationsAddProductMiddleware')
const adminMiddleware=require('../../middlewares/adminMiddleware')
const authMiddleware=require('../../middlewares/authMiddleware')


//MULTER SETUP

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, "../../public/img"))
    },
    filename: function (req, file, cb) {
        cb(null, "PRODUCTO" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage });


//ROUTES
router.get('/list/admin', authMiddleware ,productControllerDb.productList); //ADMIN

router.get('/list', adminMiddleware, productControllerDb.productListUser); //USER

router.get('/detail/:id', productControllerDb.productDetail);//LISTO

//route get create form
router.get('/create', authMiddleware, productControllerDb.productCreate);
//store new product
router.post('/create', upload.single("img"), validationsAddProduct, productControllerDb.productSave); //multer middleware

//route get edit form
router.get('/edit/:id', authMiddleware, productControllerDb.productEdit);
//update product
router.put('/edit/:id', upload.single("img"), productControllerDb.productUpdate); //multer middleware
//delete product
router.delete('/delete/:id', authMiddleware,  productControllerDb.productDelete);
//searh product
router.get('/results',  productControllerDb.searchByKeyWord);

//APIS ROUTES
router.get('/api', productDashboard.productList)

router.get('/api/detail/:id', productDashboard.productDetail)


module.exports = router;