/* . Dada la página ‘window.html’ que contiene un título y un botón ‘Abrir Página’, crear código JavaScript
de forma que, al pulsarlo se abra otra ventana: ‘datos.html’ de 400x300. Esta segunda pantalla tendrá:
1. 2 cuadros de texto donde el usuario tendrá que introducir su nombre y sus apellidos
2. 1 cuadro de tipo fecha (type=”date”) dónde seleccionará la fecha de nacimiento.
3. 1 botón ‘Mostrar’, para que muestre en la página principal, los datos del usuario junto con su
fecha de nacimiento en formato dd/mm/yyyy. Y deberá mostrar también, los años bisiestos que ha
habido desde que nació.
NOTA: Un año es bisiesto si el año es divisible por 4 pero no divisible por 100, o bien, el año debe ser
divisible por 400. */

//Abrir ventana 'datos.html' de 400x300

function abrirPagina() {
    var ventana = window.open("datos.html", "Datos", "width=400,height=300");
    ventana.focus();
}

var $boton = document.getElementById("abrirPagina");

$boton.addEventListener("click", abrirPagina);

function mostrarDatosEnPrincipal(nombre, apellidos, fechaNacimiento, anyosBisiestos) {
  // Mostrar los datos en la página principal
  const contenedor = document.getElementById("resultado");
  contenedor.innerHTML = `<p><strong>Nombre:</strong> ${nombre}</p>
                          <p><strong>Apellidos:</strong> ${apellidos}</p>
                          <p><strong>Fecha de Nacimiento:</strong> ${fechaNacimiento}</p>
                          <p><strong>Años bisiestos desde que nació hasta hoy<strong>: ${anyosBisiestos}</strong></strong></p>`;
}






