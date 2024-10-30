/* Crea un archivo HTML con 1 checkbox, desmarcado por defecto, y un botón. Al hacer clic en el botón,
marcarlo automáticamente. */

var checkbox = document.createElement('input');
checkbox.style.height = '2rem';
checkbox.style.width = '2rem';
checkbox.style.margin = '0.35rem';
checkbox.type = 'checkbox';

document.body.appendChild(checkbox);


var boton = document.createElement('button');
boton.textContent = 'Marcar Desmarcar';
boton.style.height = '2rem';
boton.style.width = '6rem';

document.body.appendChild(boton);

function marcarCheckbox(e) {

    if (checkbox.checked) {
        checkbox.checked = false;
    } else {
        checkbox.checked = true;
    }
}

boton.addEventListener('click', marcarCheckbox);
