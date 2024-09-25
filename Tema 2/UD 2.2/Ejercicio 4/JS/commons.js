
var motor = parseInt(prompt("Ingrese el tipo de motor (1, 2, 3, 4):"));

switch (motor) {
    case 0:
        alert("No hay establecido un valor definido para el tipo de bomba 0");
        break;
    case 1:
        alert("La bomba es una bomba de agua");
        break;
    case 2:
        alert("La bomba es una bomba de gasolina");
        break;
    case 3:
        alert("La bomba es una bomba de hormigón");
        break;
    case 4:
        alert("La bomba es una bomba de pasta alimenticia");
        break;
    default:
        alert("No existe un valor válido para el tipo de bomba");
}