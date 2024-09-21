document.getElementById('formContacto').addEventListener('submit', function(event){
    event.preventDefault();
})

const nombre = documetn.getElementById('name').value;
const mail = document.getElementById('mail').value;
const mensaje = document.getElementById('message').value;

console.log('Nombre: ', nombre);
console.log('Correo Electronico: ', mail);
console.log('Mensaje: ', mensaje);

const mensajeAutomatico = document.getElementById('automensaje');
mensajeAutomatico.textContent = '¡Gracias por comunicarte '+ nombre + '! Pronto Me estaré comunicando con vos.';
mensajeAutomatico.style.color = "blue";

document-getElementById('formContacto').reset();
