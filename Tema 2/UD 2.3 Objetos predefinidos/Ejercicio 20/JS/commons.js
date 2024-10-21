/* 20. Crear una página con las siguientes características:
1. Mostrar el mensaje ‘En un lugar de la Mancha’ por consola cada 2 segundos.
2. Usar un botón en la página para parar el temporizador anterior:
<input type="button" onclick="para()" >
3. Usar otro botón en la página para mostrar por consola el mensaje ‘Han pasado 3 segundos’ después de
3 segundos, una sóla vez.
4. Usar otro botón para abrir una ventana nueva de 300x300 y escribir un texto con <p> en su interior
desde js. Esta ventana nueva debe mostrar la hora actual en formato HH:MM:SS. Se tiene que
actualizar continuamente como un reloj.
Parar el reloj a los 5 segundos.
Cerrarla tras 10 segundos. */

// 1. Mostrar el mensaje 'En un lugar de la Mancha' cada 2 segundos:

function mostrarMensaje() {
    console.log("En un lugar de la Mancha");
}

var intervaloMancha = setInterval(mostrarMensaje, 2000);

// 2. Parar el temporizador anterior:

function detenerMancha() {
    clearInterval(intervaloMancha);
}

 // Botón Detener

 var botonDetener = document.getElementById('botonDetener');
 botonDetener.addEventListener('click', detenerMancha);

 // 3. Mostrar por consola el mensaje 'Han pasado 3 segundos' después de 3 segundos:

function mostrarSegundos() {
    console.log("Han pasado 3 segundos");
};

 // Boton Segundos

 var botonSegundos = document.getElementById('botonSegundos');
 botonSegundos.addEventListener('click', function() {
    setTimeout(mostrarSegundos, 3000);
 });

 // 4. Abrir una ventana nueva de 300x300 y escribir un texto con <p> en su interior:

 function abrirVentanaReloj() {
    var ventana = window.open('', 'Apartado 4', 'width=300,height=300');
    ventana.document.write('<p>Hora actual: ' + new Date().toLocaleTimeString() + '</p>');
 }