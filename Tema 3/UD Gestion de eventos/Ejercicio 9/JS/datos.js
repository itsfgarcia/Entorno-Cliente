var $nombre = document.getElementById("nombre");
var $apellidos = document.getElementById("apellidos");
var $fechaNacimiento = document.getElementById("fechaNacimiento");

var $boton = document.getElementById("enviar");

function guardarDatos() {
  // Obtener valores de los campos de entrada
  var nombre = $nombre.value;
  var apellidos = $apellidos.value;
  var fechaNacimiento = new Date($fechaNacimiento.value); // Crear un objeto Date con el valor

  if (isNaN(fechaNacimiento.getTime())) {
    alert("Por favor, ingrese una fecha de nacimiento válida.");
    return;
  }

  var anyoNacimiento = fechaNacimiento.getFullYear();
  var anyoActual = new Date().getFullYear();
  var anyosBisiestos = [];

  // Calcular años bisiestos desde el año de nacimiento hasta el año actual
  for (var i = anyoNacimiento; i <= anyoActual; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      anyosBisiestos.push(i);
    }
  }

  if (window.opener && !window.opener.closed) {
    // Llamamos a la función de la ventana principal y pasamos los datos
    window.opener.mostrarDatosEnPrincipal(
      nombre,
      apellidos,
      `${fechaNacimiento.getDate()}/${fechaNacimiento.getMonth() + 1}/${anyoNacimiento}`,
      anyosBisiestos
    );
    window.close(); // Cerrar la ventana actual
  } else {
    alert("No se pudo encontrar la ventana principal.");
  }
}

$boton.addEventListener("click", guardarDatos);
