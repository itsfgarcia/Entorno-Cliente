/* Tenemos un objeto que almacena los salarios de nuestro equipo:

let salarios = {
John: 100,
Ann: 160,
Peter: 130
};

Escribe el código para sumar todos los salarios y mostrar por pantalla el resultado de la suma. En el
ejemplo de arriba nos debería dar 390. Si salarios está vacío entonces el resultado será 0. */

let salarios = {
  John: 100,
  Ann: 160,
  Peter: 130
  };

let sumaSalarios = 0;

for (let salario in salarios) {
  sumaSalarios += salarios[salario];
}

var suma = document.createElement('div');
document.body.appendChild(suma);

suma.innerHTML = "La suma de los salarios es: " + sumaSalarios;