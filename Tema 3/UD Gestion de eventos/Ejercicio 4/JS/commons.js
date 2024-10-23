/* Crear una página con dos botones: uno ‘Sumar’ y otro ‘Restar’. Debajo hay un div que inicialmente
muestra un 5. Al pulsar el botón Sumar, se sumará uno, y al pulsar el botón restar, se restará uno. El
div tendrá que actualizarse en cada operación. Cuando se llegue al valor 3, el div debe mostrar además,
un mensaje que indique ‘Alcanzado valor 3’. Cuando vuelva a ser distinto de 3, el mensaje debe
desaparecer */

var numero = document.getElementById("numero");

function sumar() {
  numero.innerText = parseInt(numero.innerText) + 1;
  if (numero.innerText == 3) {
    numero.innerText += " Alcanzado valor 3";
  }
}

function restar() {
  numero.innerText = parseInt(numero.innerText) - 1;
  if (numero.innerText == 3) {
    numero.innerText += ": Alcanzado valor 3";
  }
}

var suma = document.getElementById("sumar");
var resta = document.getElementById("restar");

suma.addEventListener("click", sumar);

resta.addEventListener("click", restar);