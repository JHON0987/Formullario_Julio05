let nombre, correo, mensaje;

let form = document.getElementById('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    LeerDatos()
})

function LeerDatos(){
    nombre = document.getElementById('nombre').value
    correo = document.getElementById('correo').value
    mensaje = document.getElementById('textarea').value
    ValidarData(nombre, correo, mensaje)
}

function ValidarData(nombre, correo, mensaje){
    if(nombre.length==0 || correo.length==0 || mensaje.length==0){
        swal("Debes llenar todos los campos", "Vuelve y revisa que te falto", "error"); 
    }
    GuardarLocalStorage(nombre,correo,mensaje)
}

function GuardarLocalStorage(nombre,correo,mensaje) {
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('Correo',correo)
    localStorage.setItem('Mensaje',mensaje)
}