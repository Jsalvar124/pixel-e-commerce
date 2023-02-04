

window.addEventListener('load', () => {
    let formAdd = document.querySelector('#formAdd')
    let titulo = document.querySelector('#titulo');
    let largeDescription = document.querySelector('#large-description');
    let archivo = document.querySelector('#archivo')

    let erroresProductos = document.querySelector('#erroresProductos')

    formAdd.addEventListener('submit',(e)=>{
        e.preventDefault()
        let errores = [];

        if (titulo.value == "") {
            errores.push('Debes escribir el nombre de tu producto')
        } else if (titulo.value.length < 5) {
            errores.push('Debes escribir mas de cinco caracteres')
        }

        if (largeDescription.value.length < 20) {
            errores.push('Debes escribir mas de veinte caracteres')
        }

        let filename = archivo.value.toLowerCase();
        let extension = filename.split(".").pop();

        let extensiones = ['jpg','png','jpeg']

        if(!extensiones.includes(extension)){
            errores.push('Debes colocar una imagen con una extension válida (.jpg,.png,.jpeg)')
        }

        erroresProductos.innerHTML = ''
        if (errores.length > 0) {
            for (let index = 0; index < errores.length; index++) {
                erroresProductos.innerHTML += `<li>${errores[index]}</li>`
            }
        } else {
            formAdd.submit();
        }

    })
})