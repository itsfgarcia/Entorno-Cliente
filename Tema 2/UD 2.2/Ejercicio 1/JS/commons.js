var nota;

do {
     nota = parseFloat(prompt("Ingresa tu nota"));
} while (nota <= 0 && nota >= 10);

if (nota >= 5) {
    document.write("Tu nota es mayor o igual a 5. Has aprobado. Has sacado un " + nota + ".");
} else {
    document.write("Tu nota es menor a 5. Has suspendido. Has sacado un " + nota + ".");
}

if (nota >= 5) {
    document.write(" Has aprobado");
} else {
    document.write(" Has suspendido");
}