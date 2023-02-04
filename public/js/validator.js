window.addEventListener('load', () => {
    let formRegistro = document.querySelector('#form-registro')

    let fullName = document.querySelector('#nombre-apellido')
    let email = document.querySelector('#email')
    let archivo = document.querySelector('#archivo')
    let password = document.querySelector('#password');

    let listaErrores = document.querySelector('#listaErrores')

    formRegistro.addEventListener('submit', (e) => {
        e.preventDefault()
        let errores = [];

        if (fullName.value == "") {
            console.log('funciona')
            errores.push('Debes escribir tu nombre completo')
        } else if (fullName.value.length < 2) {
            errores.push('Debes escribir mas de dos caracteres')
        }

        function validateEmail(value) {
            var input = document.createElement('input');

            input.type = 'email';
            input.required = true;
            input.value = value;

            return typeof input.checkValidity === 'function' ? input.checkValidity() : /\S+@\S+\.\S+/.test(value);
        }

        if (email.value == "") {
            console.log('funciona')
            errores.push('Debes escribir tu email')
        } else if (!validateEmail(email.value)) {
            errores.push('Debes poner un email válido')
        }

        if (password.value == "") {
            console.log('funciona')
            errores.push('Debes escribir una contraseña')
        } else if (password.value.length < 8) {
            errores.push('Debes escribir mas de ocho caracteres')
        }

        console.log(archivo.value)

        let filename = archivo.value.toLowerCase();
        let extension = filename.split(".").pop();

        let extensiones = ['jpg','png','jpeg']

        if(!extensiones.includes(extension)){
            errores.push('Debes colocar una imagen con una extension válida (.jpg,.png,.jpeg)')
        }

        //No tira error
        listaErrores.innerHTML = ''
        if (errores.length > 0) {
            for (let index = 0; index < errores.length; index++) {
                listaErrores.innerHTML += `<li>${errores[index]}</li>`
            }
        } else {
            formRegistro.submit();
        }
    })
})