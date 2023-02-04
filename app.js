const express = require('express');
const path = require('path');
const app = express();
const methodOverride= require('method-override'); //configuración de PUT y DELETE
const session=require('express-session');
const cookies= require('cookie-parser');
const cors = require('cors')



const rutaMain = require('./src/routers/mainRoutes');
const rutaProduct = require('./src/routers/productRoutes');
const rutaUser = require('./src/routers/userRoutes');


const userLoggedMIddleware=require("./middlewares/userLoggedMiddleware")
//use cosas nativas
app.use(session({  //la sesion se debe inicializar antes de usar el middleware de userLogged.
    secret: "clave secreta 78-86-22", 
    resave: false, 
    saveUninitialized: false 
}));


app.use(cookies()); //se activan las cookies

app.use(userLoggedMIddleware); //middleware global, en toda la app.


app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: false })); //para usar metodo post

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'src/views' ));

app.use(cors())

app.use(methodOverride('_method')); //configuración de PUT y DELETE

//use rutas
app.use('/', rutaMain);

app.use('/user', rutaUser);

app.use('/product', rutaProduct);

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));
//error 404
app.use((req,res,next)=>{ 
    res.status(404).render("not-found")
})

