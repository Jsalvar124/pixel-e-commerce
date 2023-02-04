const {validationResult}=require("express-validator")
const fs = require ("fs")
const bcrypt=require("bcryptjs")

const User=require("../../models/User")

const userController = {
    //register: (req,res) => {
        //return res.render('register');
    //},
    // saveRegister:(req,res)=>{
    //     const resultValidation=validationResult(req);
    //     if ( resultValidation.errors.length>0){
    //         return res.render("register",{
    //             errors:resultValidation.mapped(),
    //             oldData:req.body
    //         })
    //     }

    //     let userInDb = User.findByField("email", req.body.email)

    //     if (userInDb){
    //         return res.render("register",{
    //             errors: {
    //                 email: {
    //                     msg:"Este email ya ha sido registrado"
    //                 }
    //            },
    //             oldData:req.body
    //         })
    //     }

    //     let userToCreate = {
    //         ...req.body,
    //         password:bcrypt.hashSync(req.body.password,10),
    //         passwordConfirm:bcrypt.hashSync(req.body.passwordConfirm), 
    //         avatar: req.file.filename,
    //         categoriaId: 0
    //     }

    //     let userCreated = User.create(userToCreate);
        
    //     return res.redirect("/user/login");

    // },
    //login: (req,res) => { 
        //return res.render('login');
    //},
    // logout: (req,res) => {
    //     req.session.destroy();
    //     console.log(req.session);
    //     return res.redirect('/');
    // },

    //saveLogin:(req,res)=>{
        //const resultValidation=validationResult(req);
        //if ( resultValidation.errors.length>0){
            //return res.render("login",{
                //errors:resultValidation.mapped(),
                //oldData:req.body
            //})
        //}

        
        //let userToLogin = User.findByField('email', req.body.email); //find by username, not email.

    //     if(userToLogin){
    //         let comparePasswords=bcrypt.compareSync(req.body.password, userToLogin.password);
    //         if (comparePasswords){
    //             delete userToLogin.password;
    //             req.session.userLogged=userToLogin;
    //             console.log(req.session.userLogged)

    //             if(req.body.rememberMe){ //si el checkbox llegó en el body, estaba "on"
    //                res.cookie('userEmail',req.body.email, {maxAge: (1000*60)*10}) //cookie contiene //email con duración de cinco minutos.
    //             }

    //             return res.redirect('/') 
    //         }
    //        return res.render ("login", {
    //             errors:{
    //                email:{
    //                     msg:"El email o la contraseña son incorrectos"
    //                }
    //             }
    //         })

    //     }

    //     return res.render("login",{
    //         errors: {
    //            email:{
    //                msg:"Este email de usuario no ha sido registrado"
    //             }
    //         }
    //     })
    // }
    // profile: (req,res)=>{
    //     return res.render('userProfile',{
    //         user:req.session.userLogged,
    //     })

    // },

    // productCart: (req,res) => {
    //     return res.render('productCart');
    // }
}

module.exports = userController;