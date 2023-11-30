function changeSiteColor() {
    var body = document.body;
    var header = document.querySelector('header');

    // Obtener el color actual del fondo del cuerpo y del encabezado
    var bodyColor = window.getComputedStyle(body, null).getPropertyValue("background-color");
    var headerColor = window.getComputedStyle(header, null).getPropertyValue("background-color");

    // Invertir colores del cuerpo y del encabezado
    body.style.backgroundColor = (bodyColor === "rgb(255, 255, 255)") ? "darkgreen" : "white";
    header.style.backgroundColor = (headerColor === "rgb(255, 255, 255)") ? "darkgreen" : "white";

    // Invertir colores del texto en el encabezado
    var title = document.querySelector('h1');
    title.style.color = (headerColor === "rgb(255, 255, 255)") ? "white" : "green";
}

function redirectToYouTube() {
    window.location.href = "https://www.youtube.com/watch?v=ecy1kkwR_kQ";
}


