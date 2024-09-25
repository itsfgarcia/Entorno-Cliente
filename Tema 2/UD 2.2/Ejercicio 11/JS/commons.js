var nombre = prompt("Ingrese su nombre:");
var apellidos = prompt("Ingrese sus apellidos:");
var salario = parseFloat(prompt("Ingrese su salario actual:"));
var edad = parseInt(prompt("Ingrese su edad:"));

// Si el salario es mayor de 2000€ no cambiará:

if (salario > 2000) {
  document.write(
    "Nombre: " +
      nombre +
      "<br>" +
      "Apellidos: " +
      apellidos +
      "<br>" +
      "Edad: " +
      edad +
      "<br>" +
      "Salario: " +
      salario
  );
} else if (salario >= 1000 && salario <= 2000 && edad > 45) {
  document.write(
    "Nombre: " +
      nombre +
      "<br>" +
      "Apellidos: " +
      apellidos +
      "<br>" +
      "Edad: " +
      edad +
      "<br>" +
      "Salario con incremento del 3%: " +
      (salario * 1.03).toFixed(2)
  );
} else if (salario >= 1000 && salario <= 2000 && edad < 45) {
  document.write(
    "Nombre: " +
      nombre +
      "<br>" +
      "Apellidos: " +
      apellidos +
      "<br>" +
      "Edad: " +
      edad +
      "<br>" +
      "Salario con incremento del 10%: " +
      (salario * 1.1).toFixed(2)
  );
} else if (salario < 1000 && edad < 30) {
  salario = 1100;
  document.write(
    "Nombre: " +
      nombre +
      "<br>" +
      "Apellidos: " +
      apellidos +
      "<br>" +
      "Edad: " +
      edad +
      "<br>" +
      "Salario: " +
      salario
  );
} else if (salario < 1000 && edad >= 30 && edad <= 45) {
  document.write(
    "Nombre: " +
      nombre +
      "<br>" +
      "Apellidos: " +
      apellidos +
      "<br>" +
      "Edad: " +
      edad +
      "<br>" +
      "Salario con incremento del 3%: " +
      (salario * 1.03).toFixed(2)
  );
} else if (salario < 1000 && edad > 45) {
  document.write(
    "Nombre: " +
      nombre +
      "<br>" +
      "Apellidos: " +
      apellidos +
      "<br>" +
      "Edad: " +
      edad +
      "<br>" +
      "Salario con incremento del 15%: " +
      (salario * 1.15).toFixed(2)
  );
}
