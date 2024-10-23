/* Crear un formulario con 2 input de tipo de texto: Nombre y Apellidos. Y un botón validar.
Se tiene que cumplir que:
1. El nombre comienza por vocal.
2. Si los apellidos tienen 2 o más de dos palabras.
Poner debajo de cada input un mensaje en caso de no cumplir su validación.
Una vez hecho, añadir que el mensaje aparezca con letra de color rojo. 

Sobre el ejercicio anterior, modificar lo necesario para que una vez que se pulsa el botón, si se cumplen
las dos validaciones, el formulario debe redirigir a la página de: https://ceu.es.
En caso contrario, el comportamiento debe ser igual al ejercicio anterior.

*/

var vocales = ["a", "e", "i", "o", "u"];

var nombreInput = document.getElementById("nombre");
var apellidosInput = document.getElementById("apellidos");
var validar = document.getElementById("validar");

function validacion() {

  var nombre = nombreInput.value.trim();
  var apellidos = apellidosInput.value.trim();

  var nombreValido = true;
  var apellidosValido = true; 

  // Validar el nombre

  if (nombre === "") {
    document.getElementById("mensajeNombre").innerHTML =
      "El nombre no puede estar vacío";
    document.getElementById("mensajeNombre").style.color = "red";
    nombreValido = false;
  }

  if (!vocales.includes(nombre[0].toLowerCase())) {
    document.getElementById("mensajeNombre").innerHTML =
      "El nombre debe comenzar por una vocal";
    document.getElementById("mensajeNombre").style.color = "red";
    nombreValido = false;
  }

  // Validar los apellidos
  var partesApellidos = apellidos.split(" ");
  if (partesApellidos.length < 2) {
    document.getElementById("mensajeApellidos").innerHTML =
      "Los apellidos deben tener 2 o más palabras";
    document.getElementById("mensajeApellidos").style.color = "red";
    apellidosValido = false;
  }

  // Redirigir si ambas validaciones son correctas
  if (nombreValido && apellidosValido) {
    window.location.href = "https://ceu.es/";
  }
}

validar.addEventListener("click", validacion);
