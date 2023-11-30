// script.js

// Obtén una referencia al botón "Inscríbete aquí"
const inscribeteBtn = document.getElementById('inscribeteBtn');

// Agrega un evento de clic al botón "Inscríbete aquí"
inscribeteBtn.addEventListener('click', function() {
    // Muestra un mensaje de alerta (puedes cambiar esto según tus necesidades)
    alert('¡Gracias por tu interés en la campaña de reciclaje!');
});

// Obtén una referencia al botón "Canal de YouTube"
const youtubeBtn = document.getElementById('youtubeBtn');

// Agrega un evento de clic al botón "Canal de YouTube"
youtubeBtn.addEventListener('click', function() {
    // Redirige al enlace de YouTube
    window.location.href = 'https://youtu.be/ecy1kkwR_kQ?si=tFVn7Kqd1r3JCT0U';
});