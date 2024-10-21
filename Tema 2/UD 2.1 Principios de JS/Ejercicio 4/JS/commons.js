let txt = "Hola Mundo";

console.log(txt);

let coincidencia = txt.indexOf("Mundo");

console.log(coincidencia);

let arrayTexto = txt.split(" ");

arrayTexto[1] = "Universo";

let texto = arrayTexto[0].toString() + " " + arrayTexto[1].toString();

console.log(texto);

console.log(txt.toUpperCase());
console.log(txt.toLowerCase());

var nombre = "Francisco José";
var apellido = "García";

console.log(nombre + " " + apellido);

var cliente = "Cliente";

console.log(cliente.substring(0, 3));
console.log(cliente.substring(3));