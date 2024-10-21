do {
    var dia = parseInt(prompt("Introduce el día que naciste (1-31)"));
    var mes = parseInt(prompt("Introduce el mes en que naciste (1-12)"));
    var mes = mes - 1;
    var año = parseInt(prompt("Introduce el año que naciste"));
} while (isNaN(dia) || isNaN(mes) || isNaN(año) || dia < 1 || dia > 31 || mes < 0 || mes > 12)

var fecha = new Date();
var fechaNacimiento = new Date(año, mes, dia);

var edad = fecha.getFullYear() - fechaNacimiento.getFullYear();

if (fecha.getMonth() < mes || (fecha.getMonth() == mes && fecha.getDate() < dia)) {
    edad--;
}

alert("Tu edad es " + edad + " años.");


