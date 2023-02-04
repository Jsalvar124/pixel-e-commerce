const fs = require("fs");
const path = require("path");
const router = require("../routers/mainRoutes");
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = db.Sequelize;

const { validationResult } = require("express-validator");
const Product = require("../database/models/Product");


const mainControllerDb = {
    index: async (req, res) => {
        try {
            if (req.session.userLogged) {
                console.log("el email guardado en sesion es " + req.session.userLogged.email)
            } else {
                console.log("el email guardado en sesion es UNDEFINED")
            }

            let productos = await db.Product.findAll();

            res.render('index', { productos })

        } catch (error) {
            console.log(error)
        }
    },
    nosotros: (req, res) => {
        res.render('nosotros')
    }

};

module.exports = mainControllerDb;
