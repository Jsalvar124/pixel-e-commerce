//middleware de ruta (register y login), verifica si hay alguien en sesion, si es así, verifica que tenga credencial de admin, si ambas condiciones se cumplen, redirige a la vista de admin 

function authMiddleware(req, res, next) {
    if (req.session.userLogged && req.session.userLogged.categoriaId!=2) {
        return res.redirect('/') //cambiar por vista de User Profile cuando esté hecha
    } else if (!req.session.userLogged){
        return res.redirect('/') 
    }

    next()
}

module.exports = authMiddleware