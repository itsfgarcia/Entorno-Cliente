/* Crear un estilo llamado boton que tenga una altura y anchura de 50px.
El formulario tendrá 10 botones con ese estilo creado y con values del 0 al 9 respectivamente.
Crear para todos ellos un evento tal que al pulsarlo muestre en una etiqueta div el valor del boton
pulsado.
NOTA: Para crear estilos: .boton {…..}
Pista: crear los eventos con un bucle for. */

let boton = 'height: 50px; width: 50px;'
let botones = document.getElementsByClassName("boton");

for (let i = 0; i < botones.length; i++) {
  botones[i].style = boton;
  botones[i].addEventListener("click", function () {
    document.getElementById("valor").innerHTML = `Has pulsado el botón ${i} `;
  });
}
