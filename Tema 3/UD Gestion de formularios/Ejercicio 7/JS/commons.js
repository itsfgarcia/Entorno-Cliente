/* Crear un formulario con 6 checkbox y un botón ‘validar’ . Cuando pulsemos el botón, validará que hay 3 o
más checkbox marcados. Mostrar por alert un mensaje que indique si hay o no 3 o más de 3 checkbox
marcados. */

var formulario = document.createElement('form');
document.body.appendChild(formulario);

for (var i = 0; i < 6; i++) {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'checkbox' + (i + 1);
    formulario.appendChild(checkbox);
}

var botonValidar = document.createElement('button');
botonValidar.textContent = 'Validar';

formulario.appendChild(botonValidar);

function validar() {

    var marcados = 0;

    for (var i = 1; i <= 6; i++) {
        if (formulario['checkbox' + i].checked) {
            marcados++;
        }
    }
    
    if (marcados >= 3) {
        alert('Hay 3 o más checkbox marcados.');
    } else {
        alert('No hay 3 o más checkbox marcados.');
    }
}

botonValidar.addEventListener('click', validar);

var salto = document.createElement('br');

formulario.appendChild(salto);

var checkboxSolitario = document.createElement('input');
checkboxSolitario.type = 'checkbox';

formulario.appendChild(checkboxSolitario);

var boton = document.createElement('button');
boton.textContent = 'Marcar Desmarcar';
boton.style.height = '1rem';
boton.style.width = '10rem';

formulario.appendChild(boton);

function marcarCheckbox(e) {
    
    e.preventDefault();

    if (checkboxSolitario.checked) {
        checkboxSolitario.checked = false;
    } else {
        checkboxSolitario.checked = true;
    }
}

boton.addEventListener('click', marcarCheckbox);

