
var fecha = new Date();
var cumpleaños = new Date(1999, 1, 10);

document.write("Hoy es: " + fecha.toLocaleDateString());
document.write("<br/><br/>");
document.write("Estamos en el año: " + fecha.getFullYear());

document.write("<br>Tu cumpleaños es el: " + cumpleaños.toLocaleDateString());
document.write("<br/><br/>");

var añoPasado = parseInt(fecha.getFullYear()) -1;

document.write("Hoy es " + fecha.getDate() + " de " + fecha.toLocaleString('default', { month: 'long' }) + " de " + fecha.getFullYear());
document.write("<br/>");
document.write("Hoy es " + fecha.getDate() + " del " + fecha.getMonth() + " de " + fecha.getFullYear());

/* 4. Escribir por pantalla la fecha actual obteniendo el día, el mes y el año por separado pero esta vez concatenando el
símbolo “/”: (dd/mm/yyyy) */

document.write("<br/><br/>");
document.write("Hoy es " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());