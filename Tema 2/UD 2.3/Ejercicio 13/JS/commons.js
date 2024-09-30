/* Crea un programa que pida al usuario su nombre y apellido de una sola vez. */

var nombre = prompt('Introduce tu nombre y apellidos');

var nombreCompletoSinEspacios = nombre.split(' ');
var nombreCompletoSinEspacios = nombreCompletoSinEspacios.join('');

var nombreCompletoConEspacios = nombre.split(' ');
var tamañoNombreCompleto = nombreCompletoSinEspacios.length;

document.write('Tu nombre completo sin espacios tiene: ' + tamañoNombreCompleto + ' caracteres');

document.write('<br><br>');

document.write(nombre.toLowerCase());
document.write('<br>');
document.write(nombre.toUpperCase());

document.write('<br><br>')

for (var i = 0; i < nombreCompletoConEspacios.length; i++) {
    document.write(nombreCompletoConEspacios[i] + '<br>');
}

for (var i = 0; i < nombreCompletoConEspacios.length; i++) {
    if (nombreCompletoConEspacios[i] !== 1) {
        document.write(nombreCompletoConEspacios[i].charAt(0));
    } else if (nombreCompletoConEspacios[i] === 1) {
        document.write(nombreCompletoConEspacios[i]);
    }
}

