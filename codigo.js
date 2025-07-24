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

document.addEventListener("DOMContentLoaded", function () {
    const languageSelect = document.getElementById("language-select");

    const savedLanguage = localStorage.getItem("selectedLanguage");

    if (savedLanguage) {
        languageSelect.value = savedLanguage;
    }

    languageSelect.addEventListener("change", function () {
        const selectedLanguage = this.value;
        localStorage.setItem("selectedLanguage", selectedLanguage); // Guardar idioma

        if (selectedLanguage === "en" && window.location.pathname !== "/index-en.html") {
            window.location.href = "index-en.html";
        } else if (selectedLanguage === "es" && window.location.pathname !== "/index.html") {
            window.location.href = "index.html";
        }
    });
});


const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav'); 
const navItems = document.querySelectorAll('.nav-links li a'); 

hamburger.addEventListener('click', () => {
    event.stopPropagation();
    nav.classList.toggle('show'); 
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove('show'); 
        const targetId = item.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
        nav.classList.remove('show');
    }
});
document.getElementById('formContacto').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const form = this;
    const formData = new FormData(form);

    const jsonData = {}; 
    formData.forEach((value, key) => { 
        jsonData[key] = value; 
    });

    fetch('https://formsubmit.co/ajax/b96642c7dcd812c1d2bbac7b2e562bd0', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('automensaje').textContent = "¡Gracias por comunicarte! Pronto te responderé.";
        document.getElementById('automensaje').style.color = "blue";
        form.reset(); 
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('automensaje').textContent = "Hubo un error, intenta nuevamente.";
        document.getElementById('automensaje').style.color = "red";
    });
});