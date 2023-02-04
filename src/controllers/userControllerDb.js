const fs = require("fs");
const path = require("path");
const router = require("../routers/mainRoutes");
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = db.Sequelize;
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const { validationResult } = require("express-validator");
const User = require("../database/models/User");


let userControllerDb = {
    register: (req, res) => {
        return res.render('register');
    },

    saveRegister: async (req, res) => {
        try {
            const resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0) {
                return res.render("register", {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                })
            }

            let userInDb = await db.User.findOne({
                where: {
                    email: req.body.email
                }
            })

            if (userInDb) {
                return res.render("register", {
                    errors: {
                        email: {
                            msg: "Este email ya ha sido registrado"
                        }
                    },
                    oldData: req.body
                })
            }

            let userToCreate = {
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 10),
                passwordConfirm: bcrypt.hashSync(req.body.passwordConfirm),
                avatar: req.file.filename,
                categoriaId: 1
            }

            console.log(userToCreate)

            await db.User.create(userToCreate);
            return res.redirect("/user/login");
        } catch (error) {
            console.log(error)
        }
    },
    login: (req, res) => {
        return res.render('login');
    },
    saveLogin: async (req, res) => {
        try {
            const resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0) {
                return res.render("login", {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                })
            }

            let userToLogin = await db.User.findOne({
                where: {
                    email: req.body.email
                }
            });

            if (userToLogin) {
                let comparePasswords = bcrypt.compareSync(req.body.password, userToLogin.password); //verifca que la contraseña sea correcta
                if (comparePasswords) {
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;
                    console.log(req.session.userLogged)

                    if (req.body.rememberMe) { //si el checkbox llegó en el body, estaba "on"
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 10 }) //cookie contiene //email con duración de cinco minutos.
                        console.log('La cookie se ha guardado el email: '+ req.body.email)
                    }

                    return res.redirect('/')
                }
                return res.render("login", {
                    errors: {
                        email: {
                            msg: "El email o la contraseña son incorrectos"
                        }
                    }
                })
            }
            return res.render("login", {
                errors: {
                    email: {
                        msg: "Este email de usuario no ha sido registrado"
                    }
                }
            })
        } catch (error) {
            console.log(error)
        }

    },
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie("userEmail");
        console.log(req.session);
        return res.redirect('/');
    },
    profile: (req, res) => {
        return res.render('userProfile', {
            user: req.session.userLogged,
        })

    },
    profileEdit: (req, res) => {
        return res.render('profileEdit', {
            user: req.session.userLogged
        })
    },
    profileSave: async (req, res) => {
        try {
            const resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0) {
                return res.render("profileEdit", {
                    errors: resultValidation.mapped(),
                    user: req.session.userLogged,
                    oldData: req.body
                })
            }

            let userInDb = await db.User.findOne({
                where: {
                    email: req.body.email
                }
            })

            if (userInDb && userInDb.email == req.session.userLogged.email) {
                let userToUpdate = {
                    ...req.body,
                    password: bcrypt.hashSync(req.body.password, 10),
                    passwordConfirm: bcrypt.hashSync(req.body.passwordConfirm),
                    avatar: req.file.filename,
                    categoriaId: 1
                }

                let userUpdated = await db.User.update(userToUpdate, {
                    where: {
                        id: req.params.id
                    }
                });

                req.session.destroy();
                res.clearCookie("userEmail");
                res.redirect('/user/login')
            } else if (userInDb) {
                return res.render("profileEdit", {
                    user: req.session.userLogged,
                    errors: {
                        email: {
                            msg: "Este email ya ha sido registrado"
                        }
                    },
                    oldData: req.body
                })
            } else {
                let userToUpdate = {
                    ...req.body,
                    password: bcrypt.hashSync(req.body.password, 10),
                    passwordConfirm: bcrypt.hashSync(req.body.passwordConfirm),
                    avatar: req.file.filename,
                    categoriaId: 1
                }

                await db.User.update(userToUpdate, {
                    where: {
                        id: req.params.id
                    }
                });

                req.session.destroy();
                res.clearCookie("userEmail");
                res.redirect('/user/login')
            }
        } catch (error) {
            console.log(error)
        }

    },

    productCart: (req, res) => {
        return res.render('productCart');
    }



}

module.exports = userControllerDb;
