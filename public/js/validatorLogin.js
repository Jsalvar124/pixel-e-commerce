window.addEventListener('load',()=>{
    let formLogin = document.querySelector('#formLogin');
    let emailLogin = document.querySelector('#emailLogin')
    let passwordLogin = document.querySelector('#passwordLogin')
    let erroresLogin = document.querySelector('#erroresLogin')

    console.log(emailLogin)

    formLogin.addEventListener('submit',(e)=>{
        e.preventDefault();
        errores = [];

        function validateEmail(value) {
            var input = document.createElement('input');

            input.type = 'email';
            input.required = true;
            input.value = value;

            return typeof input.checkValidity === 'function' ? input.checkValidity() : /\S+@\S+\.\S+/.test(value);
        }

        if (emailLogin.value == "") {
            errores.push('Debes escribir tu email')
        } else if (!validateEmail(emailLogin.value)) {
            errores.push('Debes poner un email válido')
        }
        if (passwordLogin.value == "") {
            errores.push('Debes escribir una contraseña')
        }

        erroresLogin.innerHTML = ''
        if (errores.length > 0) {
            for (let index = 0; index < errores.length; index++) {
                erroresLogin.innerHTML += `<li>${errores[index]}</li>`
            }
        } else {
            formLogin.submit()
        }
    })
})