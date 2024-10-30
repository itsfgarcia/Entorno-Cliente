/* Crear una página html con un campo de texto (input), poner vuestro nombre y al pulsar un botón,
mostrareis el contenido del input debajo del botón.
Pista: usar etiqueta div
Añadir al ejercicio que después de pulsar el botón, limpie el cuadro de texto y ponga el foco en él.
El nombre lo mostrareis en color azul y en negrita. Usar una clase de estilo llamado ‘resultado’. */

var inputTexto = document.createElement('input');
inputTexto.type = 'text';
document.body.appendChild(inputTexto);


var boton = document.createElement('button');
boton.textContent = 'Mostrar nombre';
document.body.appendChild(boton);

var div = document.createElement('div');
document.body.appendChild(div);

function mostrarNombre() {
    div.innerHTML = ''; // Esto limpia el div para que muestre el nuevo nombre en lugar de ir "anidandose" una bajo la otra.
    var nombre = inputTexto.value;
    var parrafo = document.createElement('p');
    parrafo.textContent = nombre;
    parrafo.className ='resultado';

    div.appendChild(parrafo);
}

boton.addEventListener('click', mostrarNombre);

// Añadir al ejercicio que después de pulsar el botón, limpie el cuadro de texto y ponga el foco en él. 

inputTexto.addEventListener('click', function() {
    inputTexto.value = '';
    inputTexto.focus();
});





