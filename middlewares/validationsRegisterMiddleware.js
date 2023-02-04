const {body}=require("express-validator");

const validationsRegister = [
    body('fullName').notEmpty().withMessage("Debes escribir tu nombre completo")
    .isLength({ min: 2 }).withMessage("Debe tener al menos dos caracteres"),
    body('userName').notEmpty().withMessage("Debes escribir tu nombre de usuario"),
    body('email')
    .notEmpty().withMessage("Debes escribir un email").bail()
    .isEmail().withMessage("Debes escribir un formato de email válido"),
    body('address').notEmpty().withMessage("Debes escribir tu dirección"),
    body('password').notEmpty().withMessage("Debes escribir tu contraseña")
    .isString()
    .isLength({ min: 8 }).withMessage('Debe tener como mínimo 8 carácteres')
    .not()
    .isLowercase().withMessage('Debe tener al menos una mayúscula')
    .not()
    .isUppercase().withMessage('Debe tener al menos una minúscula')
    .not()
    .isAlpha().withMessage('Debe tener al menos un número')
    .not()
    .isAlphanumeric().withMessage('Debe tener al menos un caracter especial'),
    body('passwordConfirm').bail()
    .custom((value,{req}) =>{
        if (req.body.password != req.body.passwordConfirm){
            throw new Error ("Las contraseñas no coinciden")
        }
        return true
    }),
    body("userImg").custom ((value,{req}) =>{
        let file=req.file;
        if (!file){
            throw new Error("Debes subir una imagen");
        }
        return true
    })
]

/* .isString()
    .isLength({ min: 8 })
    .not()
    .isLowercase()
    .not()
    .isUppercase()
    .not()
    .isNumeric()
    .not()
    .isAlpha(),
    body('passwordConfirm')
    .notEmpty().withMessage("Debes confirmar tu contraseña").bail()
    .custom((value,{req}) =>{
        if (req.body.password != req.body.passwordConfirm){
            throw new Error ("Las contraseñas no coinciden")
        }
        return true
    }) */

module.exports=validationsRegister;