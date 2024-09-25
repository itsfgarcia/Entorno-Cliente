// Modo fácil o Tosco.

/*
do {
    var sueldo = parseFloat(prompt("Introduce tu sueldo: "));
    var antiguedad = parseInt(prompt("Introduce tu antigüedad en años: "));

} while (isNaN(sueldo || isNaN(antiguedad) || sueldo <= 0 || antiguedad < 0));

if (sueldo < 500 && antiguedad >= 10) {
    var sueldoTotal = sueldo * 1.2
    document.write("Gracias a tu antigüedad tu sueldo con el aumento es: " + sueldoTotal);
} else if (sueldo < 500 && antiguedad < 10) {
    var sueldoTotal = sueldo * 1.05
    document.write("Tu sueldo con el aumento por antigüedad es: " + sueldoTotal);
} else if (sueldo >= 500 && antiguedad >= 10) {
    document.write("Tu sueldo es: " + sueldo);
}
*/

// Modo con objetos literales.

var trabajador = {
    salario: parseInt(prompt("Introduce tu sueldo: ")),
    tiempoTrabajado: parseInt(prompt("Introduce tu antigüedad en años: "))
};

if (isNaN(trabajador.salario) || isNaN(trabajador.tiempoTrabajado)) {
    document.write("Por favor, introduce valores numéricos válidos.");
} else {
    if (trabajador.salario < 500 && trabajador.tiempoTrabajado >= 10) {
        trabajador.salario *= 1.2;
        document.write("Gracias a tu antigüedad, tu sueldo con el aumento es: " + trabajador.salario);
    } else if (trabajador.salario < 500 && trabajador.tiempoTrabajado < 10) {
        trabajador.salario *= 1.05;
        document.write("Tu sueldo con el aumento por antigüedad es: " + trabajador.salario);
    } else if (trabajador.salario >= 500) {
        document.write("Tu sueldo es: " + trabajador.salario);
    }
}