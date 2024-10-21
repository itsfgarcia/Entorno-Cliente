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

document.write('<br><br>')

document.write(nombreCompletoSinEspacios[0].charAt(0));
document.write(nombreCompletoSinEspacios[1]);
document.write(nombreCompletoSinEspacios[2].charAt(0));

document.write('<br><br>')

/* Que devuelva una cadena compuesta por las tres primeras letras del nombre y de los
dos apellidos. EJ: beltudram */

document.write(nombreCompletoSinEspacios[0].toString().substring(0,3));
document.write(nombreCompletoSinEspacios[1].toString().substring(0,3));
document.write(nombreCompletoSinEspacios[2].toString().substring(0,3));