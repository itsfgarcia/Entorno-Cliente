var cadena = prompt("Ingrese una palabra o una frase:");

var palabras = cadena.split("");

var inversa = palabras.reverse();

document.write(inversa.join(""));