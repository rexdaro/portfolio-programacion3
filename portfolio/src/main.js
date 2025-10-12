const nav = document.querySelector("#nav");
const abrirMenu = document.querySelector("#abrir-menu");
const cerrarMenu = document.querySelector("#cerrar-menu");
const navLinks = document.querySelectorAll(".nav a");

abrirMenu.addEventListener("click", () => {
    nav.classList.add("visible");
    document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
});

cerrarMenu.addEventListener("click", () => {
    nav.classList.remove("visible");
    document.body.style.overflow = ''; // Restaura el scroll
});

// Cierra el menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("visible");
        document.body.style.overflow = '';
    });
});