/* Crear un formulario con un input de tipo fecha (date) y 3 input de tipo text: nombre, apellido1 y apellido2.
Asignarle un valor por defecto a los textos. Recuperar en javascript (en un bucle), todos los nombres
(atributo name) de los elementos del formulario y mostrarlos con alert. Después mostrar con alert sólo
los input de tipo text. */
var formulario = document.createElement('form');
document.body.appendChild(formulario);

var nombreInput = document.createElement('input');
nombreInput.type = 'text';
nombreInput.name = 'nombre';
nombreInput.value = 'Fulanito';
formulario.appendChild(nombreInput);

var apellido1Input = document.createElement('input');
apellido1Input.type = 'text';
apellido1Input.name = 'apellido1';
apellido1Input.value = 'De';
formulario.appendChild(apellido1Input);

var apellido2Input = document.createElement('input');
apellido2Input.type = 'text';
apellido2Input.name = 'apellido2';
apellido2Input.value = 'Tal';
formulario.appendChild(apellido2Input);

var fechaInput = document.createElement('input');
fechaInput.type = 'date';
fechaInput.name = 'fecha';
formulario.appendChild(fechaInput);

// Recuperar en JS los nombres (atributo name) de los elementos del formulario con un bucle y mostrarlos con un solo alert:

var nombres = [];

for (var i = 0; i < formulario.elements.length; i++) {
  if (formulario.elements[i].name) {
    nombres.push(formulario.elements[i].name);
  }
}

alert("Nombres de los elementos: " + nombres.join(', '));

// Mostrar con alert sólo los input de tipo text:

var textInputs = [];

for (var i = 0; i < formulario.elements.length; i++) {
  if (formulario.elements[i].type === 'text') {
    textInputs.push(formulario.elements[i].name);
  }
}

alert("Inputs de tipo text: " + textInputs.join(', '));
