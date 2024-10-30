/* Crea un archivo HTML con un input de tipo ‘text’ con un valor, y un botón. Cuando se pulse el botón,
preguntar al usuario vuestro nombre y modificar el valor del input con el valor introducido. Cambiar
también el texto del botón a ‘pulsado’. */

var input = document.createElement('input');
input.placeholder = 'Tu nombre aquí';
input.style.marginRight = '1rem';
input.type = 'text';

document.body.appendChild(input);

var boton = document.createElement('button');
boton.textContent = 'Pulsa aquí';

document.body.appendChild(boton);

function pulsarBoton () {
    var nombre = prompt('Introduce tu nombre');
    input.value = nombre;
    boton.textContent = 'Pulsado';
    boton.disabled = true;
    input.placeholder = nombre;
}

boton.addEventListener('click', pulsarBoton);