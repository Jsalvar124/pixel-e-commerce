//middleware de ruta (register y login), verifica si hay alguien en sesion, si es así, no permite ingresar en estas rutas, sino que redirige a User Profile 

function guestMiddleware(req, res, next) {
    if (req.session.userLogged ) {
        return res.redirect('/user/profile')//cambiar por un res.redirect a vista de User Profile cuando esté hecha

    }

    next()
}

module.exports = guestMiddleware