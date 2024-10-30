/*  Crea un grupo de 4 input de tipo radio con 4 valores y un botón sin formulario. Al pulsar el botón, indicar
con un alert cuál fue la opción seleccionada. No tienen id. */

for (var i = 0; i < 4; i++) {
    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'opcion';
    radio.value = i + 1;
    document.body.appendChild(radio);
    
    var label = document.createElement('label');
    label.textContent = 'Opción ' + (i + 1);
    document.body.appendChild(label);
    document.body.appendChild(document.createElement('br'));

}

var boton = document.createElement('button');

boton.innerHTML = '¿Cuál has elegido?';

document.body.appendChild(boton);

boton.addEventListener('click', function() {
    
    var seleccionado = 0;
    
    for (var i = 0; i < 4; i++) {
        if (document.getElementsByName('opcion')[i].checked) {
            seleccionado = document.getElementsByName('opcion')[i];
        }
    }
    alert('Has elegido la opción ' + seleccionado.value);
});