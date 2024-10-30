/* Crear el mismo ejercicio con los input y el botón dentro de un formulario. ¿Se te ocurre forma de hacerlo a
través del formulario? */

var formulario = document.createElement('form');
document.body.appendChild(formulario);

for (var i = 0; i < 4; i++) {
    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'opcion';
    radio.value = i + 1;
    formulario.appendChild(radio);
    
    var label = document.createElement('label');
    label.textContent = 'Opción ' + (i + 1);
    formulario.appendChild(label);
    formulario.appendChild(document.createElement('br'));
}

var boton = document.createElement('button');
boton.innerHTML = '¿Cuál has elegido?';
boton.type = 'button';

formulario.appendChild(document.createElement('br'));
formulario.appendChild(boton);


boton.addEventListener('click', function() {
    var seleccionado = formulario['opcion'].value;

    if (seleccionado) {
        alert('Has elegido la opción ' + seleccionado);
    } else {
        alert('No has seleccionado ninguna opción');
    }
});
