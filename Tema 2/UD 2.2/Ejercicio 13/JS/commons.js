var num1 = parseInt(prompt("Introduce el primer número: "));
var num2 = parseInt(prompt("Introduce el segundo número: "));
var num3 = parseInt(prompt("Introduce el tercer número: "));

var media = (num1 + num2 + num3) / 3;

if (media >= 7) {
    alert("Has sido promocionado");
} else {
    alert("No has sido promocionado, sigue trabajando duro!");
}