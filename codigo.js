// Toggle para cambiar entre modo claro y oscuro
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    // Cambia el icono del botón
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "🌞";
    } else {
        themeToggle.textContent = "🌙";
    }
});


const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav ul');

const navItems = document.querySelectorAll('.nav ul li a');
hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
});
navItems.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove('show'); // Cierra el menú
        const targetId = item.getAttribute('href'); // Obtén el ID del destino
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' }); // Scroll suave al ID
    });
});


document.getElementById('formContacto').addEventListener('submit', function(event){
    event.preventDefault();
    const mensajeAutomatico = document.getElementById('automensaje');

mensajeAutomatico.textContent = '¡Gracias por comunicarte '+ nombre + '! Pronto Me estaré comunicando con vos.';
mensajeAutomatico.style.color = "blue";
})

const nombre = document.getElementById('name').value;
const mail = document.getElementById('mail').value;
const mensaje = document.getElementById('message').value;

console.log('Nombre: ', nombre);
console.log('Correo Electronico: ', mail);
console.log('Mensaje: ', mensaje);


document.getElementById('formContacto').reset();




