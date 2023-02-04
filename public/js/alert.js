window.addEventListener('load',()=>{
    let logout = document.querySelector('#logout');

    logout.addEventListener('click',(e)=>{
        e.preventDefault()
        Swal.fire({
            title: 'Estás seguro?',
            text: "Si continúas, cerrarás tu sesión actual.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#63c500',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, cerrar sesión.',
            background:'#1f1f1f',
            color:'#cac7ff',
            iconColor:'red'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location = "/user/logout"
            }
          })
    })
})