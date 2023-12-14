// Función para mostrar mensaje al hacer clic en el banner
function showWelcomeMessage() {
    alert("Bienvenido a Por un Chile + Limpio, esta es una iniciativa universitaria que tiene como propósito concientizar respecto a una problemática poco abordada: los vertederos ilegales. Descubre nuestro sitio y mantente informado. Juntos, trabajamos por un Chile más limpio.");
}

document.getElementById("footer").innerHTML = `
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7tcPwuGOYk2Wsteo7qT5Y5lRkd2KNXhJSl3cOKqKNQrH_ImC5TkwXJG6Wf9vy23C0l_113nHZsZIDt619pD9vSJq0iPUmt8IldtJ0p_9YzhlZNgssh7pgYb9ycSoGCF5z4l5Av_zn31_2Tg7uhhhb1ugSqG96feqPGG7sR41sa6-HLNGcnzGQmH4HcGw/s320/POR%20UN%20CHILE.png" alt="Logo Por un Chile más Limpio" style="width: 50px; height: auto;">
    <p>Proyecto para el ramo Narración Gráfica de No Ficción de la malla de Periodismo en Pontificia Universidad Católica de Chile. Integrantes: Angel Olmedo, Javier Muñoz Díaz e Ignacio Flores De la Maza. Proyecto: X un Chile + Limpio.</p>
    <button id="youtubeButton">Visita nuestro canal de YouTube</button>
`;


// Función para visitar el canal de YouTube
function visitYouTube() {
    window.location.href = "https://youtu.be/ecy1kkwR_kQ?si=skHEe3QWEsy2f_J_";
}

// Función para alternar la visibilidad del menú en dispositivos móviles
function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'block' : 'none';
}
