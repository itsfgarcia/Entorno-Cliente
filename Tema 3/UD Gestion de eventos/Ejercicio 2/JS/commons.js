/* Crear una página html con dos input de tipo text. Cuando se escriba en ambos, el color del texto debe
ser rojo y cuando pierda el foco, el color del texto será negro.
Después, añadir un botón ‘Púlsame’ (button), con un evento, tal que al hacer click ponga el color del
texto del botón en azul.
Añadir otro botón ‘Cambia’, de forma que al pasar por encima ponga el borde del botón de color verde
y cuando salga del botón, lo ponga de color naranja. */


// 1. Inputs de tipo text.

var $texto1 = document.getElementById('texto1');
var $texto2 = document.getElementById('texto2');

$texto1.style = 'color: red;';
$texto2.style = 'color: red;';

$texto1.addEventListener("blur", () => {
    $texto1.style = 'color: black';
});

$texto2.addEventListener("blur", () => {
    $texto2.style = 'color: black';
});

// 2. Botón pulsame.

var $boton = document.getElementById('boton');

$boton.addEventListener("click", () => {
    $boton.style = 'color: blue;';
});

// 3. Botón cambia.

var $botonCambia = document.getElementById('botonCambia');

$botonCambia.addEventListener("mouseover", () => {
    $botonCambia.style = 'border: 2px solid green;';
});

$botonCambia.addEventListener("mouseout", () => {
    $botonCambia.style = 'border: 2px solid orange;';
});