/* 12. Crea un programa que genere una fecha aleatoria en el pasado. El programa debe mostrar la fecha generada
en la consola, en la página y en una alerta. El rango de la fecha aleatoria será entre el año 2000 y el año
actual. */

var fechaActual = new Date();

var añoActual = fechaActual.getFullYear();

var añoAleatorio = Math.floor(Math.random() * (añoActual - 2000 + 1)) + 2000;

var fechaAleatoria = new Date(añoAleatorio, Math.floor(Math.random() * 12), Math.floor(Math.random() * 31));

alert(fechaAleatoria.toLocaleDateString());
document.write("La fecha aleatoria generada es: " + (fechaAleatoria.toLocaleDateString()));
 console.log("La fecha aleatoria generada es: " + (fechaAleatoria.toLocaleDateString()));
