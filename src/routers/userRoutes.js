const express = require('express');
const path=require("path");
const router = express.Router();
const multer = require("multer")

//controller
let userController = require('../controllers/userController');
let userControllerDb= require('../controllers/userControllerDb')

//express-validator-middlewares
const validationsRegister=require('../../middlewares/validationsRegisterMiddleware')
const validationsLogin=require('../../middlewares/validationsLoginMiddleware')
const guestMiddleware=require('../../middlewares/guestMiddleware');
const userDashboard = require('../data/apis/userDashboard');


//multer setup
const storage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.resolve(__dirname,"../../public/img/avatar"))
    },
    filename:function(req,file,cb){
        cb(null, "AVATAR-IMG" + Date.now()+path.extname(file.originalname))
    }
})

const upload = multer ({storage});


//User routes
router.get('/login', guestMiddleware , userControllerDb.login); //el middleware, redirige al perfil de usuario si este ya esta logeado
router.post('/login', validationsLogin, userControllerDb.saveLogin)

router.get('/register', guestMiddleware , userControllerDb.register);

// Logout:
router.get('/logout', userControllerDb.logout);

router.post('/register', upload.single("avatar"), validationsRegister,  userControllerDb.saveRegister);

router.get('/profile',userControllerDb.profile)

router.get('/profile/edit/:id',userControllerDb.profileEdit)

router.post('/profile/edit/:id',upload.single('avatar'),validationsRegister, userControllerDb.profileSave)

router.get('/productCart', userControllerDb.productCart);

//APIS

router.get('/api', userDashboard.userList)
router.get('/api/detail/:id', userDashboard.userDetail)

module.exports = router;