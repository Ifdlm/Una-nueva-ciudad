// Función para mostrar mensaje al hacer clic en el banner
function showWelcomeMessage() {
    alert("Bienvenido a Por un Chile + Limpio, esta es una iniciativa universitaria que tiene como propósito concientizar respecto a una problemática poco abordada: los vertederos ilegales. Descubre nuestro sitio y mantente informado. Juntos, trabajamos por un Chile más limpio.");
}

// Función para visitar el canal de YouTube
function visitYouTube() {
    window.location.href = "https://youtu.be/ecy1kkwR_kQ?si=skHEe3QWEsy2f_J_";
}

// Función para alternar la visibilidad del menú en dispositivos móviles
function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'block' : 'none';
}
