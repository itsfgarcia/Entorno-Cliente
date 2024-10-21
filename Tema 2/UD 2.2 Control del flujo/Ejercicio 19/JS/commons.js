
// Modo fácil / Tosco.

/* do { 
    var num = parseInt(prompt("Introduce un número: "));
    var num2 = parseInt(prompt("Introduce otro número: "));
    var num3 = parseInt(prompt("Introduce un tercer número: "));
} while ((isNaN(num)) || (isNaN(num2)) || (isNaN(num3)));

if ((num < 10) || (num2 < 10) || (num3 < 10)) {
    alert("Al menos uno de los números es menor que 10.");
} */

var numeros = [];

for ( let i = 1; i <= 3; i++) {
    do {
        var num = parseInt(prompt("Introduce un número: "));
    } while (isNaN(num));
    numeros.push(num);
}

document.write(numeros);