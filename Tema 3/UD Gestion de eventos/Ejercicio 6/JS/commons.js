/* Crear un formulario con 2 input de tipo de texto: Nombre y Apellidos. Y un botón validar.
Se tiene que cumplir que:
1. El nombre comienza por vocal.
2. Si los apellidos tienen 2 o más de dos palabras.
Poner debajo de cada input un mensaje en caso de no cumplir su validación.
Una vez hecho, añadir que el mensaje aparezca con letra de color rojo. */

var vocales = ["a", "e", "i", "o", "u"];

var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");

var espacio = " ";

var validar = document.getElementById("validar");

function validacion() {
  nombre = nombre.value.trim();
  apellidos = apellidos.value.trim();

  if (!vocales.includes(nombre[0].toLowerCase())) {
    document.getElementById("mensajeNombre").innerHTML = "El nombre debe comenzar por una vocal";
    document.getElementById("mensajeNombre").style.color = "red";
  }

  apellidos = apellidos.split(" ");

  if (apellidos.length < 2) {
    document.getElementById("mensajeApellidos").innerHTML = "Los apellidos deben tener 2 o más palabras";
    document.getElementById("mensajeApellidos").style.color = "red";
  }
}
  

validar.addEventListener("click", validacion);
  