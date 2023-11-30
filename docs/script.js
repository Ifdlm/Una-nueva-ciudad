function redirectToYouTube() {
    window.location.href = "https://www.youtube.com/watch?v=ecy1kkwR_kQ";
}


function changeSiteColor() {
    var body = document.body;

    // Obtener el color actual del fondo
    var currentColor = window.getComputedStyle(body, null).getPropertyValue("background-color");

    // Cambiar el color del fondo
    body.style.backgroundColor = (currentColor === "rgb(255, 255, 255)") ? "lightblue" : "white";
}


