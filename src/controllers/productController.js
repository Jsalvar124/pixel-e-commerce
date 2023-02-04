const fs= require("fs");
const path =require("path");
const router = require("../routers/mainRoutes");
const db = require('../database/models');
const sequelize = db.sequelize;
const {Op}= db.Sequelize;

const {validationResult}=require("express-validator")

const productosJSON = fs.readFileSync(path.resolve(__dirname,'../data/productos.json')) 
let productos= JSON.parse(productosJSON,{encoding:"utf-8"})
const productsFilePath = path.join(__dirname, '../data/productos.json')



const productController = {

    // productDetail: (req, res) => {
        // let producto;
        // productos.forEach(productoN => { 
            // if(productoN.id==req.params.id){
                // producto=productoN
            // } 
        // });
        // return res.render('productDetail',{producto});
    // },
    //productListUser: (req,res) => {
        //return res.render('productListUser',{productos});
    //},

    //productList: (req, res) => {
        //return res.render('productList', {productos});
    //},

    //productCreate : (req,res)=> {
        //return res.render('addProduct')
    //},

    //productSave:(req,res)=>{  //POST del producto, se envía la infomación se verifica y se redirige.
        //const resultValidation=validationResult(req);
        //if ( resultValidation.errors.length>0){
        //    return res.render("addProduct",{
        //        errors:resultValidation.mapped(),
        //        oldData:req.body
        //    })
        //}
        
        
        //let indexMap = productos.map(product => product.id); 

		//let newIndex = Math.max(...indexMap) + 1; 

        //if(req.body.descuento==""){
        //    req.body.descuento=0;
        //}

        //let imageFile;
        //req.file? imageFile=req.file.filename: imageFile="default-image.png";

		//let productCreated={
			//id:newIndex,
			//...req.body,
            //img:imageFile
			
		//}

        //productos.push(productCreated); 

		//newProductsJSON = JSON.stringify(productos, null, ' ');
		//fs.writeFileSync(productsFilePath, newProductsJSON)

        //res.redirect("/product/list");
    //},

    //productEdit:(req,res)=>{ //Ruta a formulario de edición de producto
        //let producto;
        //productos.forEach(productoN => { 
            //if(productoN.id==req.params.id){
                //producto=productoN;
                //oldData:req.body
            //} 
            
        //});
        //return res.render('productEdit',{producto:producto});
    //},

    //productUpdate:(req,res)=>{  //PUT del producto, se envía la infomación actualizada y se redirige.
        //let indexFind = req.params.id;

		//let {titulo, descripcionCorta, descripcionDetallada, precio, descuento, categoria } = req.body;

		//let indexMap = productos.map(product => product.id);

		//let indexEdit = indexMap.indexOf(+indexFind);

        //titulo? productos[indexEdit].titulo = titulo: "";

		//precio? productos[indexEdit].precio = precio: "";

		//descuento? productos[indexEdit].descuento = descuento: "";

		//categoria? productos[indexEdit].categoria = categoria: "";

		//descripcionCorta? productos[indexEdit].descripcionCorta = descripcionCorta: "";

        //descripcionDetallada? productos[indexEdit].descripcionDetallada = descripcionDetallada: "";

        //req.file? productos[indexEdit].img=req.file.filename: res.redirect("/product/list");

        //updatedProductsJSON = JSON.stringify(productos, null, ' ');
		//fs.writeFileSync(productsFilePath, updatedProductsJSON)
        
        //res.redirect("/product/list");
    //},

    //productDelete:(req,res)=>{ //Metodo eleminar producto
        //let deleteId=req.params.id;
        //let productosFiltered=productos.filter(producto=>producto.id!=deleteId);

        //productos = productosFiltered;

        //updatedProductsJSON = JSON.stringify(productos, { encoding: "utf-8" });
		//fs.writeFileSync(productsFilePath, updatedProductsJSON)

        //res.redirect("/product/list");
    //}
};
module.exports = productController;