const db = require('../src/database/models/User');


async function userLoggedMIddleware(req,res,next){
    res.locals.isLogged=false; //por defecto, se asume que cuando se entra, no hay nadie loggeado.
    
    //Verificar cookie primero
    if(req.cookies.userEmail){ // si el cookie existe, entonces, se busca en la base de datos el usuario con el email almacenado en cookie.
        let emailInCookie=req.cookies.userEmail;
        console.log('se obtuvo email de cookie!: ' + emailInCookie)
        try {
            let userFromCookie = await db.User.findOne({
                where: {
                    email: emailInCookie
                }
            })

            if(userFromCookie){
                req.session.userLogged=userFromCookie;  //si user from cookie, no es undefined, quiere decir que la cookie todavía existe, y tiene un mail loggeado. se le asigna al session.
            }
            
            next()
        } catch (error) {
            console.log(error)
        }

    }

    if (req.session.userLogged){ //si la session tiene algo, se le mete en las variables locales, para poderlo mostrar por ejs.
        res.locals.isLogged=true
        res.locals.userLogged=req.session.userLogged;
        
    }


    next();

}

module.exports=userLoggedMIddleware;