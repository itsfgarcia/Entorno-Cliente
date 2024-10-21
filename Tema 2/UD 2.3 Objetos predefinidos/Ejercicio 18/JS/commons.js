document.addEventListener('DOMContentLoaded', function() {
    // Establecer color inicial
    document.body.style.backgroundColor = 'blue';
    
    var color = 'orange';
    var intervalo;

    function cambiarColor() {
        document.body.style.backgroundColor = color;
        color = (color === 'orange') ? 'blue' : 'orange';
    }

    function detenerCambioColor() {
        clearInterval(intervalo);
    }

    function iniciarCambioColor() {
        intervalo = setInterval(cambiarColor, 1000);
    }

    // Botón Detener
    document.body.innerHTML += '<button type="button" style="margin-left: 45%; margin-right: 45%; margin-top: 25%; width: 6rem; height: 3rem"id="botonDetener""> Detener </button>';

    var botonDetener = document.getElementById('botonDetener');
    botonDetener.addEventListener('click', detenerCambioColor);

    // Iniciar el cambio de color al cargar la página.
    iniciarCambioColor();
});
