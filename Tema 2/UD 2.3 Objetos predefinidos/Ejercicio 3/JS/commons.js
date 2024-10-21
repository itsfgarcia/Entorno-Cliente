do {
    var dia = parseInt(prompt("Ingresa el día de tu cumpleaños:"));
} while (isNaN(dia) || dia < 1 || dia > 31);

do {
    var mes = parseInt(prompt("Ingresa el mes de tu cumpleaños:"));
} while (isNaN(mes) || mes < 1 || mes > 12);

var año = new Date().getFullYear();
var cumpleaños = new Date(año, mes - 1, dia);
var añoFinal = 2100;

/* Crear un programa que pida al usuario dos números: el día y el mes de tu cumpleaños, y saque todos los
años en que tu cumpleaños va a caer en domingo desde este año hasta el año 2100.*/

while (cumpleaños.getFullYear() <= añoFinal) {
    if (cumpleaños.getDay() === 0) {
        document.write(cumpleaños.getFullYear() + '<br/>');
    }
    cumpleaños.setFullYear(cumpleaños.getFullYear() + 1);
}