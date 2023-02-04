const {body}=require("express-validator");

const validationsLogin = [
        body('email')
        .notEmpty().withMessage("Debes escribir un email").bail()
        .isEmail().withMessage("Debes escribir un formato de email válido"),
        body('password').notEmpty().withMessage("Debes escribir tu contraseña"),
    ]

module.exports=validationsLogin;