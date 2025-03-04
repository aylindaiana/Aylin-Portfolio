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
const nav = document.querySelector('.nav'); // Selecciona todo el contenedor nav
const navItems = document.querySelectorAll('.nav-links li a'); // Selecciona los enlaces del menú

// Alternar la visibilidad del menú hamburguesa
hamburger.addEventListener('click', () => {
    event.stopPropagation();
    nav.classList.toggle('show'); // Alterna la clase show en todo el nav
});

// Cerrar el menú cuando se selecciona un elemento
navItems.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove('show'); // Oculta el menú después de seleccionar una opción
        const targetId = item.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
        nav.classList.remove('show');
    }
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




