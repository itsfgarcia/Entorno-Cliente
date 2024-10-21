/* Realizar programa donde el usuario introduce una palabra y devuelva el número total de vocales
contenidas. 

Escribir por pantalla el resultado: “La palabra X tiene Y vocales”.

Utilizar la función forEach (PISTA: pasar de cadena a array.) */

var palabra = prompt("Introduce una palabra:");

var vocales = ["a", "e", "i", "o", "u"];
var contadorVocales = 0;

palabra.toLowerCase().split("").forEach(function(letra) {
  if (vocales.includes(letra)) {
    contadorVocales++;
  }
});

var resultado = document.createElement("div");
document.body.appendChild(resultado);

resultado.innerHTML = "La palabra " + palabra + " tiene " + contadorVocales + " vocales.";
