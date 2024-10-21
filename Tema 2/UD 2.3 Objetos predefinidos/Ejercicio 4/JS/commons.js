var fecha = new Date();

document.write("Hoy es: " + fecha.toLocaleDateString());
document.write("<br/><br/>");

var fechaIngles = fecha.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

document.write("Today is: " + fechaIngles);
document.write("<br/><br/>");

document.write("Estamos a: " + fecha.toLocaleString('es-ES'));
document.write("<br/><br/>");

document.write("Son las: " + fecha.toLocaleTimeString());