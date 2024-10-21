var precio = parseFloat(prompt("Ingrese el precio del producto: "));
var cantidad = parseInt(prompt("Ingrese la cantidad de productos: "));

var total = precio * cantidad;

document.write("El total a pagar es: "  + total.toFixed(2));

document.write(`El total a pagar es ${total.toFixed(2)}`);