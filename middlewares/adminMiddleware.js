//middleware de ruta (register y login), verifica si hay alguien en sesion, si es así, verifica que tenga credencial de admin, si ambas condiciones se cumplen, redirige a la vista de admin 

function adminMiddleware(req, res, next) {
    if (req.session.userLogged && req.session.userLogged.categoriaId==2) {
        return res.redirect("/product/list/admin") //cambiar por vista de User Profile cuando esté hecha
    } 

    next()
}

module.exports = adminMiddleware