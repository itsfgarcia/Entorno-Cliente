var nombre = prompt('Introduce tu nombre');

var fecha = new Date();
var hora = fecha.getHours();

if (hora >= 7 && hora < 12) {
    document.write('Buenos días,'+ nombre + '!');
} else {
    document.write('Buenas tardes, '+ nombre + '!');
} 