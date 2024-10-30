let temporizador = document.getElementById('temporizador');
let botonIniciar = document.getElementById('iniciar');
let botonPausar = document.getElementById('pausar');
let botonReiniciar = document.getElementById('reiniciar');

let segundos = 30;
let intervalo;

function mostrarTemporizador() {
  temporizador.innerText = segundos;
}

function iniciarTemporizador() {
  botonIniciar.disabled = true;
  botonPausar.disabled = false;
  botonReiniciar.disabled = false;
  mostrarTemporizador();
  intervalo = setInterval(function () {
    segundos--;
    if (segundos < 0) {
      clearInterval(intervalo);
      botonIniciar.disabled = false;
      botonPausar.disabled = true;
      botonReiniciar.disabled = false;
      temporizador.innerText = "¡Tiempo agotado!";
    } else {
      mostrarTemporizador();
    }
  }, 1000);
}

function pausarTemporizador() {
  clearInterval(intervalo);
  botonIniciar.disabled = false;
  botonPausar.disabled = true;
  botonReiniciar.disabled = false;
}

function reiniciarTemporizador() {
  clearInterval(intervalo);
  segundos = 30;
  botonIniciar.disabled = false;
  botonPausar.disabled = true;
  botonReiniciar.disabled = true;
  mostrarTemporizador();
}
